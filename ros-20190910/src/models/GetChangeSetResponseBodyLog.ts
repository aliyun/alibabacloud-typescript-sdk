// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetChangeSetResponseBodyLogTerraformLogs } from "./GetChangeSetResponseBodyLogTerraformLogs";


export class GetChangeSetResponseBodyLog extends $dara.Model {
  /**
   * @remarks
   * The Terraform logs. This parameter is returned only for change sets of Terraform stacks.
   * 
   * > This parameter is not returned for change sets that are in the Creating state. This parameter indicates the logs of the change set creation operation for Terraform stacks.
   */
  terraformLogs?: GetChangeSetResponseBodyLogTerraformLogs[];
  static names(): { [key: string]: string } {
    return {
      terraformLogs: 'TerraformLogs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      terraformLogs: { 'type': 'array', 'itemType': GetChangeSetResponseBodyLogTerraformLogs },
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

