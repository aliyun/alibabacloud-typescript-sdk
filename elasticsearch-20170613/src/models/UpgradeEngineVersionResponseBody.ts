// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeEngineVersionResponseBodyResultValidateResult extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * ClusterStatusNotHealth
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The cluster status is not health
   */
  errorMsg?: string;
  /**
   * @remarks
   * The error type. Valid values:
   * 
   * - clusterStatus: cluster health status.
   * - clusterConfigYml: cluster YML file.
   * - clusterConfigPlugins: cluster configuration file.
   * - clusterResource: cluster resources.
   * - clusterSnapshot: cluster snapshot.
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
   * @remarks
   * Indicates whether the check is passed. Valid values:
   * 
   * - success: passed.
   * - failed: not passed.
   * 
   * @example
   * success
   */
  status?: string;
  /**
   * @remarks
   * The check information.
   */
  validateResult?: UpgradeEngineVersionResponseBodyResultValidateResult[];
  /**
   * @remarks
   * The check type. Valid values:
   * 
   * - checkClusterHealth: cluster health status.
   * - checkConfigCompatible: configuration compatibility status.
   * - checkClusterResource: resource space status.
   * - checkClusterSnapshot: whether a snapshot exists.
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
   * The request ID.
   * 
   * @example
   * F99407AB-2FA9-489E-A259-40CF6DC*****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
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

