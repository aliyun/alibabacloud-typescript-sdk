// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateEnvDropMetricsRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The language. Valid values:
   * 
   * *   zh (default)
   * *   en
   * 
   * @example
   * zh
   */
  aliyunLang?: string;
  /**
   * @remarks
   * The metric to be discarded. Separate multiple metrics with line feeds.
   * 
   * This parameter is required.
   * 
   * @example
   * metric_1
   * metric_2
   * metric_3
   */
  dropMetrics?: string;
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
      dropMetrics: 'DropMetrics',
      environmentId: 'EnvironmentId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunLang: 'string',
      dropMetrics: 'string',
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

