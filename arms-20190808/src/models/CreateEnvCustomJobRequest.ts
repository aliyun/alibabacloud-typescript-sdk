// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnvCustomJobRequest extends $dara.Model {
  /**
   * @remarks
   * The language. Valid values: zh and en. Default value: zh.
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * The YAML configuration string of the custom job.
   * 
   * This parameter is required.
   * 
   * @example
   * Refer to supplementary instructions.
   */
  configYaml?: string;
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
      aliyunLang: 'AliyunLang',
      configYaml: 'ConfigYaml',
      customJobName: 'CustomJobName',
      environmentId: 'EnvironmentId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunLang: 'string',
      configYaml: 'string',
      customJobName: 'string',
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

