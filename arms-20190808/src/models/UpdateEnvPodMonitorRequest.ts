// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEnvPodMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The language. Valid values:
   * 
   * *   zh (default value): Chinese
   * *   en: English
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * The YAML configuration file of the ServiceMonitor.
   * 
   * This parameter is required.
   * 
   * @example
   * Refer to supplementary instructions.
   */
  configYaml?: string;
  /**
   * @remarks
   * Checks whether the format is valid and whether targets are matched.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The environment ID.
   * 
   * This parameter is required.
   * 
   * @example
   * env-xxxxx
   */
  environmentId?: string;
  /**
   * @remarks
   * The namespace where the PodMonitor resides.
   * 
   * This parameter is required.
   * 
   * @example
   * arms-prom
   */
  namespace?: string;
  /**
   * @remarks
   * The name of the PodMonitor.
   * 
   * This parameter is required.
   * 
   * @example
   * arms-admin-pm1
   */
  podMonitorName?: string;
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
      namespace: 'Namespace',
      podMonitorName: 'PodMonitorName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunLang: 'string',
      configYaml: 'string',
      dryRun: 'boolean',
      environmentId: 'string',
      namespace: 'string',
      podMonitorName: 'string',
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

