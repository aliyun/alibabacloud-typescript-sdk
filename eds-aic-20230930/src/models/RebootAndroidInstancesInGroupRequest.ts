// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootAndroidInstancesInGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud phone instances.
   */
  androidInstanceIds?: string[];
  /**
   * @remarks
   * Specifies whether to enforce a restart operation. If a cloud phone instance fails to stop due to system or network issues, a forced restart can be triggered, though it may result in data loss.
   * 
   * Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  forceStop?: boolean;
  ignoreParamValidation?: boolean;
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

