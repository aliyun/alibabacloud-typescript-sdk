// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUpdateBackendTaskResponseBodyApiUpdateBackendResultsApiUpdateBackendResult extends $dara.Model {
  /**
   * @example
   * checkin_linechart_today
   */
  apiName?: string;
  /**
   * @example
   * 14faa7ba0572445685866ddb6a6f19da
   */
  apiUid?: string;
  /**
   * @example
   * c09b078bcb8f4ade9677bd8b18cdf43f
   */
  backendId?: string;
  /**
   * @example
   * Failed
   */
  errorMsg?: string;
  /**
   * @example
   * 3013a55c0c44483f984d26df27120513
   */
  groupId?: string;
  /**
   * @example
   * imotob1
   */
  groupName?: string;
  /**
   * @example
   * d8f2f54f3309458b8aaceb36c01c2dd9
   */
  stageId?: string;
  /**
   * @example
   * RELEASE
   */
  stageName?: string;
  /**
   * @example
   * OVER
   */
  updateStatus?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      apiUid: 'ApiUid',
      backendId: 'BackendId',
      errorMsg: 'ErrorMsg',
      groupId: 'GroupId',
      groupName: 'GroupName',
      stageId: 'StageId',
      stageName: 'StageName',
      updateStatus: 'UpdateStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      apiUid: 'string',
      backendId: 'string',
      errorMsg: 'string',
      groupId: 'string',
      groupName: 'string',
      stageId: 'string',
      stageName: 'string',
      updateStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

