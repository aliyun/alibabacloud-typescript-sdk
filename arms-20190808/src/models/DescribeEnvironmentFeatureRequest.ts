// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnvironmentFeatureRequest extends $dara.Model {
  /**
   * @remarks
   * The language. Valid values: en and zh.
   * 
   * @example
   * en
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
   * The name of the feature.
   * 
   * Valid values:
   * 
   * *   app-agent-pilot: App Pilot agent
   * *   arms-cmonitor: ARMS CMonitor agent
   * *   metric-agent: Prometheus agent
   * 
   * This parameter is required.
   * 
   * @example
   * metric-agent
   */
  featureName?: string;
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
      environmentId: 'EnvironmentId',
      featureName: 'FeatureName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunLang: 'string',
      environmentId: 'string',
      featureName: 'string',
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

