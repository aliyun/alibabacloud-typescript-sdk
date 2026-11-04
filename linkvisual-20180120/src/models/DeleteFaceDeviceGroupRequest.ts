// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFaceDeviceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The device group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * qaf2tihq
   */
  deviceGroupId?: string;
  /**
   * @remarks
   * The isolation ID.
   * 
   * This parameter is required.
   * 
   * @example
   * TestIsolationId
   */
  isolationId?: string;
  static names(): { [key: string]: string } {
    return {
      deviceGroupId: 'DeviceGroupId',
      isolationId: 'IsolationId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deviceGroupId: 'string',
      isolationId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

