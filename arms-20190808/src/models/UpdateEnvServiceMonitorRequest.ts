// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEnvServiceMonitorRequest extends $dara.Model {
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
   * The YAML configuration string.
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
   * The namespace where the ServiceMonitor is located.
   * 
   * This parameter is required.
   * 
   * @example
   * arms-prom
   */
  namespace?: string;
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
  /**
   * @remarks
   * The name of the ServiceMonitor.
   * 
   * This parameter is required.
   * 
   * @example
   * serviceMonitor1
   */
  serviceMonitorName?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunLang: 'AliyunLang',
      configYaml: 'ConfigYaml',
      dryRun: 'DryRun',
      environmentId: 'EnvironmentId',
      namespace: 'Namespace',
      regionId: 'RegionId',
      serviceMonitorName: 'ServiceMonitorName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunLang: 'string',
      configYaml: 'string',
      dryRun: 'boolean',
      environmentId: 'string',
      namespace: 'string',
      regionId: 'string',
      serviceMonitorName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

