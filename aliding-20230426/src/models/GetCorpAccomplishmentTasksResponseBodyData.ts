// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCorpAccomplishmentTasksResponseBodyData extends $dara.Model {
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
   * 标题
   */
  title?: string;
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
      originatorNickNameInEnglish: 'OriginatorNickNameInEnglish',
      originatorPhoto: 'OriginatorPhoto',
      outResult: 'OutResult',
      outResultName: 'OutResultName',
      processInstanceId: 'ProcessInstanceId',
      title: 'Title',
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
      originatorNickNameInEnglish: 'string',
      originatorPhoto: 'string',
      outResult: 'string',
      outResultName: 'string',
      processInstanceId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

