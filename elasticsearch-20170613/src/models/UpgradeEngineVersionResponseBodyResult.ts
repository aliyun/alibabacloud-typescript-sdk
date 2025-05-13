// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpgradeEngineVersionResponseBodyResultValidateResult } from "./UpgradeEngineVersionResponseBodyResultValidateResult";


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

