// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCorpTasksResponseBodyData extends $dara.Model {
  /**
   * @example
   * 2020-01-01
   */
  activeTimeGMT?: string;
  /**
   * @example
   * 123456
   */
  actualActionerId?: string;
  /**
   * @example
   * APP_XCxxx
   */
  appType?: string;
  /**
   * @example
   * 2020-01-01
   */
  createTimeGMT?: string;
  /**
   * @example
   * 2020-01-01
   */
  finishTimeGMT?: string;
  /**
   * @example
   * 123456@li.com
   */
  originatorEmail?: string;
  /**
   * @example
   * 123456
   */
  originatorId?: string;
  /**
   * @example
   * 名称
   */
  originatorName?: string;
  /**
   * @example
   * name
   */
  originatorNameInEnglish?: string;
  /**
   * @example
   * 昵称
   */
  originatorNickName?: string;
  /**
   * @example
   * nick en
   */
  originatorNickNameEn?: string;
  /**
   * @example
   * english nick
   */
  originatorNickNameInEnglish?: string;
  /**
   * @example
   * originatorPhotoexample
   */
  originatorPhoto?: string;
  /**
   * @example
   * agree
   */
  outResult?: string;
  /**
   * @example
   * 结果名称
   */
  outResultName?: string;
  /**
   * @example
   * instancexxxx
   */
  processInstanceId?: string;
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * taskId
   */
  taskId?: string;
  /**
   * @example
   * running
   */
  taskType?: string;
  /**
   * @example
   * 标题
   */
  title?: string;
  /**
   * @example
   * title
   */
  titleInEnglish?: string;
  static names(): { [key: string]: string } {
    return {
      activeTimeGMT: 'ActiveTimeGMT',
      actualActionerId: 'ActualActionerId',
      appType: 'AppType',
      createTimeGMT: 'CreateTimeGMT',
      finishTimeGMT: 'FinishTimeGMT',
      originatorEmail: 'OriginatorEmail',
      originatorId: 'OriginatorId',
      originatorName: 'OriginatorName',
      originatorNameInEnglish: 'OriginatorNameInEnglish',
      originatorNickName: 'OriginatorNickName',
      originatorNickNameEn: 'OriginatorNickNameEn',
      originatorNickNameInEnglish: 'OriginatorNickNameInEnglish',
      originatorPhoto: 'OriginatorPhoto',
      outResult: 'OutResult',
      outResultName: 'OutResultName',
      processInstanceId: 'ProcessInstanceId',
      status: 'Status',
      taskId: 'TaskId',
      taskType: 'TaskType',
      title: 'Title',
      titleInEnglish: 'TitleInEnglish',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activeTimeGMT: 'string',
      actualActionerId: 'string',
      appType: 'string',
      createTimeGMT: 'string',
      finishTimeGMT: 'string',
      originatorEmail: 'string',
      originatorId: 'string',
      originatorName: 'string',
      originatorNameInEnglish: 'string',
      originatorNickName: 'string',
      originatorNickNameEn: 'string',
      originatorNickNameInEnglish: 'string',
      originatorPhoto: 'string',
      outResult: 'string',
      outResultName: 'string',
      processInstanceId: 'string',
      status: 'string',
      taskId: 'string',
      taskType: 'string',
      title: 'string',
      titleInEnglish: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCorpTasksResponseBody extends $dara.Model {
  /**
   * @example
   * [{}]
   */
  data?: GetCorpTasksResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      requestId: 'requestId',
      totalCount: 'totalCount',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetCorpTasksResponseBodyData },
      pageNumber: 'number',
      requestId: 'string',
      totalCount: 'number',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

