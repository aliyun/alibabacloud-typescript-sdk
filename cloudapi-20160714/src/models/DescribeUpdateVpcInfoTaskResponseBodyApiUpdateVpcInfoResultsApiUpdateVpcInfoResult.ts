// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUpdateVpcInfoTaskResponseBodyApiUpdateVpcInfoResultsApiUpdateVpcInfoResult extends $dara.Model {
  /**
   * @example
   * api_test2
   */
  apiName?: string;
  /**
   * @example
   * 86364e7c166c47ba819b3f8f95ac0913
   */
  apiUid?: string;
  /**
   * @example
   * Success. Request Success.
   */
  errorMsg?: string;
  /**
   * @example
   * e8da6f6346184da9a30d0dc1888b1f3b
   */
  groupId?: string;
  /**
   * @example
   * test
   */
  groupName?: string;
  /**
   * @example
   * fe952b95072747e2a8dfd336bcff8d7f
   */
  stageId?: string;
  /**
   * @example
   * RELEASE
   */
  stageName?: string;
  /**
   * @example
   * success
   */
  updateStatus?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      apiUid: 'ApiUid',
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

