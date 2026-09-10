// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleTemplate extends $dara.Model {
  /**
   * @remarks
   * The alert type.
   * 
   * @example
   * METRIC_SET
   */
  alertType?: string;
  /**
   * @remarks
   * The number of rules that have been applied from this template.
   * 
   * @example
   * 5
   */
  applyCount?: number;
  /**
   * @remarks
   * The business type.
   * 
   * @example
   * ALERT
   */
  bizType?: string;
  /**
   * @remarks
   * The data source, in JSON string format.
   * 
   * @example
   * {"type":"SLS","project":"my-project"}
   */
  datasource?: string;
  /**
   * @remarks
   * The template description.
   * 
   * @example
   * Triggers an alert when the CPU usage of an ECS instance exceeds the threshold
   */
  description?: string;
  /**
   * @remarks
   * The creation time, in UNIX millisecond timestamp format.
   * 
   * @example
   * 1700000000000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The last modified time, in UNIX millisecond timestamp format.
   * 
   * @example
   * 1700000000000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * 1001
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the template is a system template. Valid values: 1: yes. 0: no.
   * 
   * @example
   * 1
   */
  isSystem?: number;
  /**
   * @remarks
   * The labels, in JSON string format.
   * 
   * @example
   * {"env":"prod","team":"ops"}
   */
  labels?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * acs_ecs_dashboard
   */
  namespace?: string;
  /**
   * @remarks
   * The cloud service category.
   * 
   * @example
   * ecs
   */
  productCategory?: string;
  /**
   * @remarks
   * The rule configurations, in JSON string format.
   * 
   * @example
   * {"threshold":80,"duration":60}
   */
  ruleConfigs?: string;
  /**
   * @remarks
   * The applicable scenarios.
   * 
   * @example
   * ECS
   */
  scenes?: string;
  /**
   * @remarks
   * The schema version.
   * 
   * @example
   * 1.0
   */
  schemaVersion?: string;
  /**
   * @remarks
   * The source type.
   * 
   * @example
   * SYSTEM
   */
  sourceType?: string;
  /**
   * @remarks
   * The template status. Valid values: 1: enabled. 0: disabled.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The subtype.
   * 
   * @example
   * THRESHOLD
   */
  subType?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * ECS CPU Usage Alert Template
   */
  templateName?: string;
  /**
   * @remarks
   * The ID of the user to whom the template belongs.
   * 
   * @example
   * 1234567890
   */
  userId?: string;
  /**
   * @remarks
   * The template UUID.
   * 
   * @example
   * a1b2c3d4-e5f6-7890-abcd-ef1234567890
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alertType: 'alertType',
      applyCount: 'applyCount',
      bizType: 'bizType',
      datasource: 'datasource',
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      isSystem: 'isSystem',
      labels: 'labels',
      namespace: 'namespace',
      productCategory: 'productCategory',
      ruleConfigs: 'ruleConfigs',
      scenes: 'scenes',
      schemaVersion: 'schemaVersion',
      sourceType: 'sourceType',
      status: 'status',
      subType: 'subType',
      templateName: 'templateName',
      userId: 'userId',
      uuid: 'uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertType: 'string',
      applyCount: 'number',
      bizType: 'string',
      datasource: 'string',
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      isSystem: 'number',
      labels: 'string',
      namespace: 'string',
      productCategory: 'string',
      ruleConfigs: 'string',
      scenes: 'string',
      schemaVersion: 'string',
      sourceType: 'string',
      status: 'number',
      subType: 'string',
      templateName: 'string',
      userId: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

