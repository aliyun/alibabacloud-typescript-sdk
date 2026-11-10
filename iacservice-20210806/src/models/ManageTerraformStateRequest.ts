// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManageTerraformStateRequest extends $dara.Model {
  /**
   * @remarks
   * The modification action for the state file. Valid values:
   * - Import
   * - StateRemove
   * 
   * This parameter is required.
   * 
   * @example
   * Import
   */
  action?: string;
  /**
   * @remarks
   * The idempotency token. Format: [0-9a-zA-Z-]{1,64}. A UUID is recommended.
   * 
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @remarks
   * The task identifier. For stack tasks, the format is <$stackId>:<$deploymentName>. For regular tasks, the format is <$TaskId>.
   * 
   * This parameter is required.
   * 
   * @example
   * stack-as11xxxxxxxxx:developmentA
   */
  identifier?: string;
  /**
   * @remarks
   * The actual ID of the Terraform resource.
   * 
   * @example
   * vsw-xxxxxxxx
   */
  importResourceId?: string;
  /**
   * @remarks
   * The identifier of the resource in the Terraform template. For stack tasks, the format is <$componetName>:<$resourceName>. For regular tasks, the format is <$resourceName>.
   * 
   * This parameter is required.
   * 
   * @example
   * vpc:alicloud_vswitch.vswitches[0]
   */
  resourceIdentifier?: string;
  /**
   * @remarks
   * The task type. Valid values:
   * - Stack
   * - Task
   * 
   * This parameter is required.
   * 
   * @example
   * Stack
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      clientToken: 'clientToken',
      identifier: 'identifier',
      importResourceId: 'importResourceId',
      resourceIdentifier: 'resourceIdentifier',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      clientToken: 'string',
      identifier: 'string',
      importResourceId: 'string',
      resourceIdentifier: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

