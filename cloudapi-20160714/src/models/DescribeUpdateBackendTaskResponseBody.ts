// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUpdateBackendTaskResponseBodyApiUpdateBackendResultsApiUpdateBackendResult extends $dara.Model {
  apiName?: string;
  apiUid?: string;
  backendId?: string;
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

export class DescribeUpdateBackendTaskResponseBodyApiUpdateBackendResults extends $dara.Model {
  apiUpdateBackendResult?: DescribeUpdateBackendTaskResponseBodyApiUpdateBackendResultsApiUpdateBackendResult[];
  static names(): { [key: string]: string } {
    return {
      apiUpdateBackendResult: 'ApiUpdateBackendResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiUpdateBackendResult: { 'type': 'array', 'itemType': DescribeUpdateBackendTaskResponseBodyApiUpdateBackendResultsApiUpdateBackendResult },
    };
  }

  validate() {
    if(Array.isArray(this.apiUpdateBackendResult)) {
      $dara.Model.validateArray(this.apiUpdateBackendResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUpdateBackendTaskResponseBody extends $dara.Model {
  apiUpdateBackendResults?: DescribeUpdateBackendTaskResponseBodyApiUpdateBackendResults;
  /**
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ016
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiUpdateBackendResults: 'ApiUpdateBackendResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiUpdateBackendResults: DescribeUpdateBackendTaskResponseBodyApiUpdateBackendResults,
      requestId: 'string',
    };
  }

  validate() {
    if(this.apiUpdateBackendResults && typeof (this.apiUpdateBackendResults as any).validate === 'function') {
      (this.apiUpdateBackendResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

