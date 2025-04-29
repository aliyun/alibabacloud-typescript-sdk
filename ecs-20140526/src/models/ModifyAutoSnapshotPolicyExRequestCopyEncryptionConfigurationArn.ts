// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAutoSnapshotPolicyExRequestCopyEncryptionConfigurationArn extends $dara.Model {
  /**
   * @remarks
   * This parameter is not publicly available.
   * 
   * @example
   * 1000000000
   */
  assumeRoleFor?: number;
  /**
   * @remarks
   * This parameter is not publicly available.
   * 
   * @example
   * hide
   */
  roleType?: string;
  /**
   * @remarks
   * This parameter is not publicly available.
   * 
   * @example
   * hide
   */
  rolearn?: string;
  static names(): { [key: string]: string } {
    return {
      assumeRoleFor: 'AssumeRoleFor',
      roleType: 'RoleType',
      rolearn: 'Rolearn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assumeRoleFor: 'number',
      roleType: 'string',
      rolearn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

