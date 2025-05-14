// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAdbSecureRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the cloud phone instances. You can specify a maximum of 50 cloud phone instances.
   */
  instanceIds?: string[];
  /**
   * @remarks
   * The status of the ADB authentication feature.
   * 
   * Valid values:
   * 
   * *   0: The ADB authentication feature is disabled.
   * *   1: The ADB authentication feature is enabled.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      instanceIds: 'InstanceIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      status: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

