// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUpdateVpcInfoTaskResponseBodyApiUpdateVpcInfoResultsApiUpdateVpcInfoResult extends $dara.Model {
  apiName?: string;
  apiUid?: string;
  errorMsg?: string;
  groupId?: string;
  groupName?: string;
  stageId?: string;
  stageName?: string;
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

export class DescribeUpdateVpcInfoTaskResponseBodyApiUpdateVpcInfoResults extends $dara.Model {
  apiUpdateVpcInfoResult?: DescribeUpdateVpcInfoTaskResponseBodyApiUpdateVpcInfoResultsApiUpdateVpcInfoResult[];
  static names(): { [key: string]: string } {
    return {
      apiUpdateVpcInfoResult: 'ApiUpdateVpcInfoResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiUpdateVpcInfoResult: { 'type': 'array', 'itemType': DescribeUpdateVpcInfoTaskResponseBodyApiUpdateVpcInfoResultsApiUpdateVpcInfoResult },
    };
  }

  validate() {
    if(Array.isArray(this.apiUpdateVpcInfoResult)) {
      $dara.Model.validateArray(this.apiUpdateVpcInfoResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpdateVpcInfoTaskResponseBody extends $dara.Model {
  apiUpdateVpcInfoResults?: DescribeUpdateVpcInfoTaskResponseBodyApiUpdateVpcInfoResults;
  /**
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ015
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiUpdateVpcInfoResults: 'ApiUpdateVpcInfoResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiUpdateVpcInfoResults: DescribeUpdateVpcInfoTaskResponseBodyApiUpdateVpcInfoResults,
      requestId: 'string',
    };
  }

  validate() {
    if(this.apiUpdateVpcInfoResults && typeof (this.apiUpdateVpcInfoResults as any).validate === 'function') {
      (this.apiUpdateVpcInfoResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

