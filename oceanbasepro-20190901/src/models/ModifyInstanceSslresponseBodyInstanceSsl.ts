// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyInstanceSSLResponseBodyInstanceSSL extends $dara.Model {
  /**
   * @remarks
   * The operation to modify the SSL status. Valid values:
   * 
   * - open: Enable SSL encryption.
   * 
   * - update: Update the CA certificate.
   * 
   * - close: Disable SSL encryption.
   * 
   * @example
   * open
   */
  enableSSL?: string;
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      enableSSL: 'EnableSSL',
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSSL: 'string',
      instanceId: 'string',
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

