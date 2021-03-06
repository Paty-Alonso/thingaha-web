import thingahaApiClient from '../../utils/thingahaApiClient'

export const fetchSchools = async ({ page } = { page: 1 }) => {
  const { data } = await thingahaApiClient.get('/schools', {
    params: { page },
  })

  return {
    data: {
      schools: data.schools,
      total_count: data.total_count,
      total_pages: data.pages,
    },
  }
}

export const createSchool = async (values) => {
  const { data } = await thingahaApiClient.post('/schools', values)

  return {
    school: data.school,
  }
}

export const updateSchool = async (values) => {
  const { data } = await thingahaApiClient.put(`/schools/${values.id}`, values)

  // Until api returns updated school data, we will just need to call the api again for now.
  const { data: schoolData } = await thingahaApiClient.get(
    `/schools/${values.id}`
  )

  return {
    school: schoolData.school,
  }
}
