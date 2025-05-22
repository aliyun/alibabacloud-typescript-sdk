// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PreviewStackResponseBodyStackLogTerraformLogs } from "./PreviewStackResponseBodyStackLogTerraformLogs";


export class PreviewStackResponseBodyStackLog extends $dara.Model {
  /**
   * @remarks
   * The Terraform logs. This parameter is returned only if the stack is a Terraform stack.
   * 
   * > This parameter contains the logs of previewing the stack.
   */
  terraformLogs?: PreviewStackResponseBodyStackLogTerraformLogs[];
  static names(): { [key: string]: string } {
    return {
      terraformLogs: 'TerraformLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      terraformLogs: { 'type': 'array', 'itemType': PreviewStackResponseBodyStackLogTerraformLogs },
    };
  }

  validate() {
    if(Array.isArray(this.terraformLogs)) {
      $dara.Model.validateArray(this.terraformLogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

