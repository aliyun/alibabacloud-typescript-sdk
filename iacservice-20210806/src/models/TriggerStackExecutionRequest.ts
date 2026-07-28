// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerStackExecutionRequest extends $dara.Model {
  /**
   * @remarks
   * Operation to execute  
   * - terraform plan  
   * - terraform apply  
   * - state detect
   * 
   * This parameter is required.
   * 
   * @example
   * terraform plan
   */
  action?: string;
  /**
   * @remarks
   * Collection of changed files. You can specify only the folders containing changed files.
   * 
   * This parameter is required.
   */
  changedFolders?: string[];
  /**
   * @remarks
   * Idempotent token. Format: [0-9a-zA-Z-]{1,64}. We recommend using a UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @remarks
   * Stack code path. Currently, only Stacks created through IaC templates are supported.  
   * Parameter format: iacservice::{moduleId}
   * 
   * This parameter is required.
   * 
   * @example
   * iacservice::mod-xxx
   */
  codePackagePath?: string;
  /**
   * @remarks
   * Code version of the Stack to trigger
   * 
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

