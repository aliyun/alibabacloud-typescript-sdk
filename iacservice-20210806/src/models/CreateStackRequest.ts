// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateStackRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency token. Format: [0-9a-zA-Z-]{1,64}. We recommend that you use a UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * a65451293e64979ba7a4b573950217fe
   */
  clientToken?: string;
  /**
   * @remarks
   * The description of the resource stack. The value cannot exceed 256 characters.
   * 
   * @example
   * Stack to create ecs and related resource for multiple enviroments.
   */
  description?: string;
  /**
   * @remarks
   * The resource stack name. The name must be 2 to 128 characters in length and can contain letters, digits, Chinese characters, hyphens (-), underscores (_), and periods (.). The name cannot start or end with a hyphen, underscore, or period.
   * 
   * @example
   * stack-test
   */
  name?: string;
  parameterSetIds?: string[];
  /**
   * @remarks
   * The RAM role to be assigned to the task. This role is used to automatically continue the execution of scheduled tasks during automatic triggers or offline scenarios.
   * 
   * @example
   * TestIacRole
   */
  ramRole?: string;
  /**
   * @remarks
   * The creation source. Valid values:
   * 
   * - OSS: a template from OSS.
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
   * The path of the configuration source. The value cannot exceed 1000 characters.
   * 
   * - If the source is OSS, the value is in the format oss::<file link> and must be a zip file. Example: oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip
   * - If the source is IAC_SERVICE_MODULE, the value is a template ID. Example: mod-xxxxx
   * 
   * @example
   * oss::https://terraform-pipeline.oss-eu-central-1.aliyuncs.com/code.zip
   */
  sourcePath?: string;
  /**
   * @remarks
   * The working directory where the configuration file is located. Enter / if it is in the root directory. Example: config/ or /
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

