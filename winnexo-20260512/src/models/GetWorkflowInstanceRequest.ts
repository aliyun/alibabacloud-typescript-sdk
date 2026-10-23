// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkflowInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The stable logical instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * wfi_20261016_abc123
   */
  instanceId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If you use winnexo-cli, pass this parameter explicitly by using --tenant-id.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

