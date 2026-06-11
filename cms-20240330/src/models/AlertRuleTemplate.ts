// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleTemplate extends $dara.Model {
  /**
   * @remarks
   * The type of the alert.
   */
  alertType?: string;
  /**
   * @remarks
   * The number of alert rules created from this template.
   */
  applyCount?: number;
  /**
   * @remarks
   * The description of the template.
   */
  description?: string;
  /**
   * @remarks
   * The creation time of the template, as a UNIX timestamp.
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time the template was last modified, as a UNIX timestamp.
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the alert rule template.
   */
  id?: number;
  /**
   * @remarks
   * Indicates whether the template is system-defined. Valid values: `0` (user-defined) and `1` (system-defined).
   */
  isSystem?: number;
  /**
   * @remarks
   * The labels associated with the template, formatted as a JSON string.
   */
  labels?: string;
  /**
   * @remarks
   * The rule configuration, formatted as a JSON string.
   */
  ruleConfigs?: string;
  /**
   * @remarks
   * The status of the template.
   */
  status?: number;
  /**
   * @remarks
   * The subtype of the alert.
   */
  subType?: string;
  /**
   * @remarks
   * The name of the alert rule template.
   */
  templateName?: string;
  /**
   * @remarks
   * The ID of the user who owns the template.
   */
  userId?: string;
  /**
   * @remarks
   * The universally unique identifier (UUID) of the template.
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      alertType: 'alertType',
      applyCount: 'applyCount',
      description: 'description',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      isSystem: 'isSystem',
      labels: 'labels',
      ruleConfigs: 'ruleConfigs',
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
      description: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      isSystem: 'number',
      labels: 'string',
      ruleConfigs: 'string',
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

