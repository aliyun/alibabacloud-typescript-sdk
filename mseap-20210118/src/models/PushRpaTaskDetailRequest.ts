// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PushRpaTaskDetailRequest extends $dara.Model {
  /**
   * @remarks
   * aliyunKp
   * 
   * @example
   * 1
   */
  aliyunKp?: string;
  /**
   * @remarks
   * apiType
   * 
   * @example
   * MPC
   */
  apiType?: string;
  /**
   * @remarks
   * bid
   * 
   * @example
   * 26842
   */
  bid?: string;
  /**
   * @remarks
   * inputData
   * 
   * @example
   * http://wssq.sbj.cnipa.gov.cn:9080/tmsve/wssqsy_getCayzDl.xhtml
   */
  inputData?: string;
  /**
   * @remarks
   * inputHtml
   * 
   * @example
   * 1
   */
  inputHtml?: string;
  /**
   * @remarks
   * inputScreenshot
   * 
   * @example
   * 1
   */
  inputScreenshot?: string;
  /**
   * @remarks
   * lang
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * modelDetailId
   * 
   * @example
   * 6
   */
  modelDetailId?: number;
  /**
   * @remarks
   * originalRequest
   * 
   * @example
   * 1
   */
  originalRequest?: string;
  /**
   * @remarks
   * outputData
   */
  outputData?: string;
  /**
   * @remarks
   * outputHtml
   * 
   * @example
   * <div class=\\"photobox\\" id=\\"Layer3\\" style=\\"visibility: visible
   */
  outputHtml?: string;
  /**
   * @remarks
   * outputScreenshot
   * 
   * @example
   * http://dbu-nap-p-test.oss-cn-beijing.aliyuncs.com/202301/20230110/5782089/1673334129101-d111874e-f181-4d1c-8edc-83e789975329.jpg?Expires=1675926129&OSSAccessKeyId=hObpgEXoca42qH3V&Signature=------
   */
  outputScreenshot?: string;
  /**
   * @remarks
   * status
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * taskDetailId
   * 
   * @example
   * 1
   */
  taskDetailId?: number;
  /**
   * @remarks
   * taskId
   * 
   * @example
   * 5596654
   */
  taskId?: number;
  /**
   * @remarks
   * userAccessKeyId
   * 
   * @example
   * 1
   */
  userAccessKeyId?: string;
  /**
   * @remarks
   * userBid
   * 
   * @example
   * 1
   */
  userBid?: string;
  /**
   * @remarks
   * userCallerParentId
   * 
   * @example
   * 1
   */
  userCallerParentId?: number;
  /**
   * @remarks
   * userCallerType
   * 
   * @example
   * 1
   */
  userCallerType?: string;
  /**
   * @remarks
   * userClientIp
   * 
   * @example
   * 1
   */
  userClientIp?: string;
  /**
   * @remarks
   * userKp
   * 
   * @example
   * 1
   */
  userKp?: string;
  /**
   * @remarks
   * userSecurityToken
   * 
   * @example
   * 1
   */
  userSecurityToken?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunKp: 'AliyunKp',
      apiType: 'ApiType',
      bid: 'Bid',
      inputData: 'InputData',
      inputHtml: 'InputHtml',
      inputScreenshot: 'InputScreenshot',
      lang: 'Lang',
      modelDetailId: 'ModelDetailId',
      originalRequest: 'OriginalRequest',
      outputData: 'OutputData',
      outputHtml: 'OutputHtml',
      outputScreenshot: 'OutputScreenshot',
      status: 'Status',
      taskDetailId: 'TaskDetailId',
      taskId: 'TaskId',
      userAccessKeyId: 'UserAccessKeyId',
      userBid: 'UserBid',
      userCallerParentId: 'UserCallerParentId',
      userCallerType: 'UserCallerType',
      userClientIp: 'UserClientIp',
      userKp: 'UserKp',
      userSecurityToken: 'UserSecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunKp: 'string',
      apiType: 'string',
      bid: 'string',
      inputData: 'string',
      inputHtml: 'string',
      inputScreenshot: 'string',
      lang: 'string',
      modelDetailId: 'number',
      originalRequest: 'string',
      outputData: 'string',
      outputHtml: 'string',
      outputScreenshot: 'string',
      status: 'number',
      taskDetailId: 'number',
      taskId: 'number',
      userAccessKeyId: 'string',
      userBid: 'string',
      userCallerParentId: 'number',
      userCallerType: 'string',
      userClientIp: 'string',
      userKp: 'string',
      userSecurityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

