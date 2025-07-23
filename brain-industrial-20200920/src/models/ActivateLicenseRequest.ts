// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ActivateLicenseRequest extends $dara.Model {
  /**
   * @example
   * XXX
   */
  fingerprint?: string;
  /**
   * @remarks
   * ID
   */
  id?: string;
  /**
   * @example
   * 12bea6b4489fsde7b903fe05934a0adx
   */
  instanceId?: string;
  orderId?: string;
  static names(): { [key: string]: string } {
    return {
      fingerprint: 'Fingerprint',
      id: 'Id',
      instanceId: 'InstanceId',
      orderId: 'OrderId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fingerprint: 'string',
      id: 'string',
      instanceId: 'string',
      orderId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

