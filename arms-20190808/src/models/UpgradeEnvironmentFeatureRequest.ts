// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpgradeEnvironmentFeatureRequest extends $dara.Model {
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
   * The environment ID.
   * 
   * This parameter is required.
   * 
   * @example
   * env-xxx
   */
  environmentId?: string;
  /**
   * @remarks
   * The feature name. Valid values: app-agent-pilot, metric-agent, ebpf-agent, and service-check.
   * 
   * This parameter is required.
   * 
   * @example
   * metric-agent
   */
  featureName?: string;
  /**
   * @remarks
   * The version of the feature.
   * 
   * @example
   * 1.1.17
   */
  featureVersion?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * Specifies whether to enable service discovery. For PodAnnotation, set the value to run or mini. For PodMonitor and ServiceMonitor, set the value to true or false.
   * 
   * @example
   * {"PodAnnotation":"run"}
   */
  values?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunLang: 'AliyunLang',
      environmentId: 'EnvironmentId',
      featureName: 'FeatureName',
      featureVersion: 'FeatureVersion',
      regionId: 'RegionId',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunLang: 'string',
      environmentId: 'string',
      featureName: 'string',
      featureVersion: 'string',
      regionId: 'string',
      values: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

