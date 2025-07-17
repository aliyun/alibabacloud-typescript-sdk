// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallEnvironmentFeatureRequest extends $dara.Model {
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
   * The metadata of the feature.
   * 
   * @example
   * {\\"continuous\\":true,\\"dataRevision\\":2}
   */
  config?: string;
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
   * The name of the feature.
   * 
   * Valid values:
   * 
   * *   app-agent-pilot
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   metric-agent
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
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
   * This parameter is required.
   * 
   * @example
   * 1.1.17
   */
  featureVersion?: string;
  /**
   * @remarks
   * The region ID of the feature.
   * 
   * @example
   * cn-shenzhen
   */
  region?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunLang: 'AliyunLang',
      config: 'Config',
      environmentId: 'EnvironmentId',
      featureName: 'FeatureName',
      featureVersion: 'FeatureVersion',
      region: 'Region',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunLang: 'string',
      config: 'string',
      environmentId: 'string',
      featureName: 'string',
      featureVersion: 'string',
      region: 'string',
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

