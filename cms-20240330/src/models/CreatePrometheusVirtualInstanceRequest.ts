// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrometheusVirtualInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * Each cloud product can only create one virtual instance in each region.
   * 
   * This parameter is required.
   * 
   * @example
   * cms_prometheus
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

