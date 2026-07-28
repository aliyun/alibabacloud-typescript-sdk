// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStackRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency token. Format: [0-9a-zA-Z-]{1,64}. We recommend that you use a UUID.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the stack.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The name of the stack. The name must be 2 to 128 characters in length and can contain letters, digits, Chinese characters, hyphens (-), underscores (_), and periods (.). The name cannot start or end with a hyphen, underscore, or period.
   * 
   * @example
   * stack-test
   */
  name?: string;
  /**
   * @remarks
   * The RAM role granted to the task. This role is used to automatically continue the execution of scheduled tasks during automatic triggering or offline scenarios.
   * 
   * @example
   * TestIacRole
   */
  ramRole?: string;
  /**
   * @remarks
   * The path of the configuration source. The value can be up to 1,000 characters in length.
   * - If the source is OSS, set this parameter to oss::<file URL>. The file must be a ZIP file. Example: oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip.
   * - If the source is IAC_SERVICE_MODULE, set this parameter to a template ID. Example: mod-xxxxx.
   * 
   * @example
   * oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip
   */
  sourcePath?: string;
  /**
   * @remarks
   * The working directory where the configuration files are located. Enter / if the files are in the root directory. Example: config/ or /.
   * 
   * @example
   * /
   */
  workingDirectory?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      name: 'name',
      ramRole: 'ramRole',
      sourcePath: 'sourcePath',
      workingDirectory: 'workingDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      name: 'string',
      ramRole: 'string',
      sourcePath: 'string',
      workingDirectory: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

