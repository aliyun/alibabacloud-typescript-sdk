// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnvCustomJobRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the custom job.
   * 
   * This parameter is required.
   * 
   * @example
   * customJob1
   */
  customJobName?: string;
  /**
   * @remarks
   * Specifies whether to return an encrypted YAML string.
   * 
   * @example
   * true
   */
  encryptYaml?: boolean;
  /**
   * @remarks
   * The ID of the environment instance.
   * 
   * This parameter is required.
   * 
   * @example
   * env-xxxxxx
   */
  environmentId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      customJobName: 'CustomJobName',
      encryptYaml: 'EncryptYaml',
      environmentId: 'EnvironmentId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customJobName: 'string',
      encryptYaml: 'boolean',
      environmentId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

