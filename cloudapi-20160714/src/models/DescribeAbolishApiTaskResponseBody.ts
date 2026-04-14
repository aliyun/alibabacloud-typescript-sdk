// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAbolishApiTaskResponseBodyApiAbolishResultsApiAbolishResult extends $dara.Model {
  abolishStatus?: string;
  apiName?: string;
  apiUid?: string;
  errorMsg?: string;
  groupId?: string;
  groupName?: string;
  stageId?: string;
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

export class DescribeAbolishApiTaskResponseBodyApiAbolishResults extends $dara.Model {
  apiAbolishResult?: DescribeAbolishApiTaskResponseBodyApiAbolishResultsApiAbolishResult[];
  static names(): { [key: string]: string } {
    return {
      apiAbolishResult: 'ApiAbolishResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiAbolishResult: { 'type': 'array', 'itemType': DescribeAbolishApiTaskResponseBodyApiAbolishResultsApiAbolishResult },
    };
  }

  validate() {
    if(Array.isArray(this.apiAbolishResult)) {
      $dara.Model.validateArray(this.apiAbolishResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAbolishApiTaskResponseBody extends $dara.Model {
  apiAbolishResults?: DescribeAbolishApiTaskResponseBodyApiAbolishResults;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E8515BA6-81CD-4191-A7CF-C4FCDD3C0D99
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiAbolishResults: 'ApiAbolishResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiAbolishResults: DescribeAbolishApiTaskResponseBodyApiAbolishResults,
      requestId: 'string',
    };
  }

  validate() {
    if(this.apiAbolishResults && typeof (this.apiAbolishResults as any).validate === 'function') {
      (this.apiAbolishResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

