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

