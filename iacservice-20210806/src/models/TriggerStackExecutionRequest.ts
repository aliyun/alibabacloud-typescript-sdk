// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerStackExecutionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * terraform plan
   */
  action?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  changedFolders?: string[];
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
   * iacservice::mod-xxx
   */
  codePackagePath?: string;
  /**
   * @example
   * v1
   */
  codeVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      action: 'action',
      changedFolders: 'changedFolders',
      clientToken: 'clientToken',
      codePackagePath: 'codePackagePath',
      codeVersionId: 'codeVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      action: 'string',
      changedFolders: { 'type': 'array', 'itemType': 'string' },
      clientToken: 'string',
      codePackagePath: 'string',
      codeVersionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.changedFolders)) {
      $dara.Model.validateArray(this.changedFolders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

