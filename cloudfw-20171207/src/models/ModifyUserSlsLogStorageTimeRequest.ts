// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserSlsLogStorageTimeRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vipcloudfw-cn-uqm3fz****
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 180
   */
  storageTime?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      storageTime: 'StorageTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      storageTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

