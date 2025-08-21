// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeEngineVersionResponseBodyResultValidateResult extends $dara.Model {
  /**
   * @example
   * ClusterStatusNotHealth
   */
  errorCode?: string;
  /**
   * @example
   * The cluster status is not health
   */
  errorMsg?: string;
  /**
   * @remarks
   * The verification is passed. Valid values:
   * 
   * *   success: through
   * *   failed: failed
   * 
   * @example
   * clusterStatus
   */
  errorType?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMsg: 'errorMsg',
      errorType: 'errorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMsg: 'string',
      errorType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeEngineVersionResponseBodyResult extends $dara.Model {
  /**
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The error message returned.
   */
  validateResult?: UpgradeEngineVersionResponseBodyResultValidateResult[];
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * checkClusterHealth
   */
  validateType?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'status',
      validateResult: 'validateResult',
      validateType: 'validateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      validateResult: { 'type': 'array', 'itemType': UpgradeEngineVersionResponseBodyResultValidateResult },
      validateType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.validateResult)) {
      $dara.Model.validateArray(this.validateResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpgradeEngineVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The verification information.
   * 
   * @example
   * F99407AB-2FA9-489E-A259-40CF6DC*****
   */
  requestId?: string;
  /**
   * @remarks
   * The type of the error. Valid values:
   * 
   * *   clusterStatus: the health status of the cluster.
   * *   clusterConfigYml: Cluster YML File
   * *   clusterConfigPlugins: Cluster Configuration File
   * *   clusterResource: cluster resources
   * *   clusterSnapshot: cluster snapshot
   */
  result?: UpgradeEngineVersionResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': UpgradeEngineVersionResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

