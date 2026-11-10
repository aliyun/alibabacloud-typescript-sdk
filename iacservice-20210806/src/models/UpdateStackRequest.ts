// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateStackRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency token. The format is [0-9a-zA-Z-]{1,64}. A UUID is recommended.
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
   * The name of the stack. The name must be 2 to 128 characters in length, and can contain letters, digits, Chinese characters, hyphens (-), underscores (_), and periods (.). The name cannot start or end with a hyphen, underscore, or period.
   * 
   * @example
   * stack-test
   */
  name?: string;
  /**
   * @remarks
   * The Resource Access Management (RAM) role authorized for the task. This role is used to automatically resume the execution of scheduled tasks in auto-triggered or offline scenarios.
   * 
   * @example
   * TestIacRole
   */
  ramRole?: string;
  /**
   * @remarks
   * Specifies whether to skip the property validation of the provider. Default value: false.
   */
  skipPropertyValidation?: boolean;
  /**
   * @remarks
   * The path value of the configuration source. The value cannot exceed 1,000 characters.
   * - If the source is OSS, the value is in the oss::<file URL> format. The file must be a ZIP file. Example: oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip.
   * - If the source is IAC_SERVICE_MODULE, the value is the template ID. Example: mod-xxxxx.
   * 
   * @example
   * oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip
   */
  sourcePath?: string;
  /**
   * @remarks
   * The working directory where the configuration file is located. If the file is in the root directory, enter /. Examples: config/ or /.
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
      skipPropertyValidation: 'skipPropertyValidation',
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
      skipPropertyValidation: 'boolean',
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

