// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootAndroidInstancesInGroupRequest extends $dara.Model {
  /**
   * @remarks
   * A list of instance IDs.
   */
  androidInstanceIds?: string[];
  /**
   * @remarks
   * Specifies whether to forcefully reboot the instances. If a Cloud Phone instance cannot be shut down because of system or network errors, you can force a reboot. This operation may cause data loss.
   * 
   * @example
   * false
   */
  forceStop?: boolean;
  ignoreParamValidation?: boolean;
  /**
   * @remarks
   * The sales mode. This parameter is deprecated.
   * 
   * @example
   * Instance
   */
  saleMode?: string;
  static names(): { [key: string]: string } {
    return {
      androidInstanceIds: 'AndroidInstanceIds',
      forceStop: 'ForceStop',
      ignoreParamValidation: 'IgnoreParamValidation',
      saleMode: 'SaleMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      androidInstanceIds: { 'type': 'array', 'itemType': 'string' },
      forceStop: 'boolean',
      ignoreParamValidation: 'boolean',
      saleMode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.androidInstanceIds)) {
      $dara.Model.validateArray(this.androidInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

