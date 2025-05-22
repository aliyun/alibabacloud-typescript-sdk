// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackGroupResponseBodyStackGroupAutoDeployment extends $dara.Model {
  /**
   * @remarks
   * Indicates whether stacks in the member account are retained when the member account is deleted from the folder.
   * 
   * Valid values:
   * 
   * *   true: The stacks are retained.
   * *   false: The stacks are deleted.
   * 
   * >  This parameter is returned only when the Enabled parameter is set to true.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The folder IDs of the resource directory. This parameter is used to deploy stack instances within all the accounts in the folders.
   * 
   * >  This parameter is returned only when the PermissionModel parameter is set to SERVICE_MANAGED.
   * 
   * @example
   * true
   */
  retainStacksOnAccountRemoval?: boolean;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      retainStacksOnAccountRemoval: 'RetainStacksOnAccountRemoval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      retainStacksOnAccountRemoval: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

