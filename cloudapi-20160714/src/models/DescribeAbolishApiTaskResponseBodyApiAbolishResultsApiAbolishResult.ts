// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAbolishApiTaskResponseBodyApiAbolishResultsApiAbolishResult extends $dara.Model {
  /**
   * @remarks
   * The unpublishing status.
   * 
   * @example
   * OVER
   */
  abolishStatus?: string;
  /**
   * @remarks
   * The name of the API.
   * 
   * @example
   * v2_page_consent
   */
  apiName?: string;
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * 4e26cdbbb113416dba1f0285bed29979
   */
  apiUid?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Success. Request Success.
   */
  errorMsg?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * 160cb6505e1c43a6b84346856d74eb47
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the API group.
   * 
   * @example
   * wb2022021401619286
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the runtime environment.
   * 
   * @example
   * 0919f2854a88484c91dc9253347c78f9
   */
  stageId?: string;
  /**
   * @remarks
   * The name of the runtime environment. Valid values:
   * 
   * *   **RELEASE**
   * *   **TEST**
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      abolishStatus: 'AbolishStatus',
      apiName: 'ApiName',
      apiUid: 'ApiUid',
      errorMsg: 'ErrorMsg',
      groupId: 'GroupId',
      groupName: 'GroupName',
      stageId: 'StageId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abolishStatus: 'string',
      apiName: 'string',
      apiUid: 'string',
      errorMsg: 'string',
      groupId: 'string',
      groupName: 'string',
      stageId: 'string',
      stageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

