// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ManageTerraformStateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Import
   */
  action?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * stack-as11xxxxxxxxx:developmentA
   */
  identifier?: string;
  /**
   * @example
   * vsw-xxxxxxxx
   */
  importResourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * vpc:alicloud_vswitch.vswitches[0]
   */
  resourceIdentifier?: string;
  /**
   * @remarks
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

