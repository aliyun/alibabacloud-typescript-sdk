// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RebootAndroidInstancesInGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The list of instance IDs.
   */
  androidInstanceIds?: string[];
  /**
   * @remarks
   * Specifies whether to force a restart. You can force a restart if a cloud phone cannot be shut down due to system or network exceptions. Unsaved data may be lost.
   * 
   * @example
   * false
   */
  forceStop?: boolean;
  /**
   * @remarks
   * Specifies whether to skip parameter validation. A value of true indicates that validation is skipped. If the value is false or not specified, validation is performed.
   */
  ignoreParamValidation?: boolean;
  /**
   * @remarks
   * **[Deprecated]** The sales mode.
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

