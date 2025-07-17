// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RestartEnvironmentFeatureRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the environment.
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
   * The region ID. Default value: cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      environmentId: 'EnvironmentId',
      featureName: 'FeatureName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

