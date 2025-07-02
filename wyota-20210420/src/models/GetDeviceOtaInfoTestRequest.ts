// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeviceOtaInfoTestRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  baseVersion?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  deviceId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  model?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      baseVersion: 'BaseVersion',
      deviceId: 'DeviceId',
      model: 'Model',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      baseVersion: 'string',
      deviceId: 'string',
      model: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

