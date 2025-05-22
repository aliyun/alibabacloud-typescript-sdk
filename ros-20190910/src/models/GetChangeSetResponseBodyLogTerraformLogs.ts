// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetChangeSetResponseBodyLogTerraformLogs extends $dara.Model {
  /**
   * @remarks
   * The name of the Terraform command that is run. Valid values:
   * 
   * *   apply
   * *   plan
   * *   destroy
   * *   version
   * 
   * For more information about Terraform commands, see [Command](https://www.terraform.io/cli/commands).
   * 
   * @example
   * apply
   */
  command?: string;
  /**
   * @remarks
   * The content of the output stream that is returned after the command is run.
   * 
   * @example
   * Apply complete! Resources: 42 added, 0 changed, 0 destroyed.
   */
  content?: string;
  /**
   * @remarks
   * The output stream. Valid values:
   * 
   * *   stdout: standard output stream
   * *   stderr: standard error stream
   * 
   * @example
   * stdout
   */
  stream?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      content: 'Content',
      stream: 'Stream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      content: 'string',
      stream: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

