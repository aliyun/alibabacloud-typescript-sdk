// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeployApiTaskResponseBodyDeployedResultsDeployedResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * 0433c1cd84724923b7a4f9ca1cfc249c
   */
  apiUid?: string;
  /**
   * @remarks
   * The deployment status of the API.
   * 
   * @example
   * OVER
   */
  deployedStatus?: string;
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
   * e8da6f6346184da9a30d0dc1888b1f3b
   */
  groupId?: string;
  /**
   * @remarks
   * The runtime environment of the API. Valid values:
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
      apiUid: 'ApiUid',
      deployedStatus: 'DeployedStatus',
      errorMsg: 'ErrorMsg',
      groupId: 'GroupId',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiUid: 'string',
      deployedStatus: 'string',
      errorMsg: 'string',
      groupId: 'string',
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

export class DescribeDeployApiTaskResponseBodyDeployedResults extends $dara.Model {
  deployedResult?: DescribeDeployApiTaskResponseBodyDeployedResultsDeployedResult[];
  static names(): { [key: string]: string } {
    return {
      deployedResult: 'DeployedResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployedResult: { 'type': 'array', 'itemType': DescribeDeployApiTaskResponseBodyDeployedResultsDeployedResult },
    };
  }

  validate() {
    if(Array.isArray(this.deployedResult)) {
      $dara.Model.validateArray(this.deployedResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDeployApiTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  deployedResults?: DescribeDeployApiTaskResponseBodyDeployedResults;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CA4B3261-F14A-5E33-8608-F75A1DF27AD4
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      deployedResults: 'DeployedResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deployedResults: DescribeDeployApiTaskResponseBodyDeployedResults,
      requestId: 'string',
    };
  }

  validate() {
    if(this.deployedResults && typeof (this.deployedResults as any).validate === 'function') {
      (this.deployedResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

