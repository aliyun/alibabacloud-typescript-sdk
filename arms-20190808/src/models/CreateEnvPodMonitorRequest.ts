// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEnvPodMonitorRequest extends $dara.Model {
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
   * The YAML configuration snippet for PodMonitor.
   * 
   * This parameter is required.
   * 
   * @example
   * Refer to supplementary instructions.
   */
  configYaml?: string;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
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
      dryRun: 'DryRun',
      environmentId: 'EnvironmentId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunLang: 'string',
      configYaml: 'string',
      dryRun: 'boolean',
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

