// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStackRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency token. Format: [0-9a-zA-Z-]{1,64}. A UUID is recommended.
   * 
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the stack. The description can be up to 256 characters in length.
   * 
   * @example
   * Stack to create ecs and related resource for multiple enviroments.
   */
  description?: string;
  /**
   * @remarks
   * The name of the stack. The name must be 2 to 128 characters in length and can contain letters, digits, Chinese characters, hyphens (-), underscores (_), and periods (.). It cannot start or end with a hyphen, underscore, or period.
   * 
   * @example
   * stack-test
   */
  name?: string;
  /**
   * @remarks
   * The associated parameter sets.
   */
  parameterSetIds?: string[];
  /**
   * @remarks
   * The RAM role authorized for the task. This role is used to automatically resume the execution of scheduled tasks in auto-triggered or offline scenarios.
   * 
   * @example
   * TestIacRole
   */
  ramRole?: string;
  /**
   * @remarks
   * Specifies whether to skip resource property validation for the provider. Default value: false.
   */
  skipPropertyValidation?: boolean;
  /**
   * @remarks
   * The source of the stack. Valid values:
   * - OSS: a template stored in Object Storage Service (OSS).
   * - IAC_SERVICE_MODULE: a template created in the automation service console.
   * 
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  source?: string;
  /**
   * @remarks
   * The path of the source. The value can be up to 1,000 characters in length.
   * - If the source is OSS, the value must be in the oss::<file URL> format and the file must be a ZIP file. Example: oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip.
   * - If the source is IAC_SERVICE_MODULE, the value must be the template ID. Example: mod-xxxxx.
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
   * /stack
   */
  workingDirectory?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      description: 'description',
      name: 'name',
      parameterSetIds: 'parameterSetIds',
      ramRole: 'ramRole',
      skipPropertyValidation: 'skipPropertyValidation',
      source: 'source',
      sourcePath: 'sourcePath',
      workingDirectory: 'workingDirectory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      description: 'string',
      name: 'string',
      parameterSetIds: { 'type': 'array', 'itemType': 'string' },
      ramRole: 'string',
      skipPropertyValidation: 'boolean',
      source: 'string',
      sourcePath: 'string',
      workingDirectory: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameterSetIds)) {
      $dara.Model.validateArray(this.parameterSetIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

