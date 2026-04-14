// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrometheusVirtualInstancesRequest extends $dara.Model {
  /**
   * @remarks
   * Optional cloud product
   * 
   * @example
   * ack-csi-fuse
   */
  namespace?: string;
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
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

