const util = require('../utils/apiconfig')
const testIndex = params => util.fatch('GET', '/index/index', params)
const code2Session = params => util.fatch('POST', '/account/code2Session', params)
const wxLogin = params => util.fatch('POST', '/account/wxLogin', params)
const getAllMoodList = params => util.fatch('GET', '/mood/getAllMoodList', params)
const getAllHotList = params => util.fatch('GET', '/hot/getAllHotList', params)
const releaseMood = params => util.fatch('POST', '/mood/releaseMood', params)
const getMoodDetail = params => util.fatch('POST', '/mood/getMoodDetail', params)
const CompletionUser = params => util.fatch('POST', '/account/CompletionUser', params)
const myMoodlist = params => util.fatch('GET', '/mood/myMoodlist', params)
module.exports = {
  testIndex,
  code2Session,
  wxLogin,
  getAllMoodList,
  getAllHotList,
  releaseMood,
  getMoodDetail,
  CompletionUser,
  myMoodlist
}