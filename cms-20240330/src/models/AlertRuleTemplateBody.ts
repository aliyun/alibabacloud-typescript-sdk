// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleTemplateBody extends $dara.Model {
  /**
   * @remarks
   * The template description.
   * 
   * @example
   * Alert template for sustained CPU usage above 80%
   */
  description?: string;
  /**
   * @remarks
   * The business-level key-value labels. This is a JSON object string, such as {"env":"prod"}. The default value is an empty object. An empty string is equivalent to not passing this parameter.
   * 
   * @example
   * {"env":"prod"}
   */
  labels?: string;
  /**
   * @remarks
   * The rule configurations. This is a v2 wire JSON object string, and the top level must include datasourceConfig.
   * 
   * @example
   * {"datasourceConfig":{"type":"PROMETHEUS","regionId":"cn-hangzhou"},"queryConfig":{"type":"PROMQL_QUERY","expr":"up == 0"}}
   */
  ruleConfigs?: string;
  /**
   * @remarks
   * The scenario labels. This is a JSON array string, such as ["Runbook"]. The default value is an empty array. An empty string is equivalent to not passing this parameter.
   * 
   * @example
   * ["Runbook"]
   */
  scenes?: string;
  /**
   * @remarks
   * The schema version of the template. The default value is v2. v1 is rejected by the backend.
   * 
   * @example
   * v2
   */
  schemaVersion?: string;
  /**
   * @remarks
   * The enabling status of the template. Valid values: 1: Enabled. 0: Disabled. Default value: 1.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * prod-cpu-high-template
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      labels: 'labels',
      ruleConfigs: 'ruleConfigs',
      scenes: 'scenes',
      schemaVersion: 'schemaVersion',
      status: 'status',
      templateName: 'templateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      labels: 'string',
      ruleConfigs: 'string',
      scenes: 'string',
      schemaVersion: 'string',
      status: 'number',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

