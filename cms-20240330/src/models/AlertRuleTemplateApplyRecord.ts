// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AlertRuleTemplateApplyRecord extends $dara.Model {
  /**
   * @remarks
   * The effective configuration for the rule application.
   * 
   * @example
   * {"workspace":"ws-1","displayName":"CPU alert"}
   */
  applyConfig?: string;
  /**
   * @remarks
   * The time when the record was created.
   * 
   * @example
   * 1680861352600
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the record was updated.
   * 
   * @example
   * 1680861352600
   */
  gmtModified?: number;
  /**
   * @remarks
   * The record ID.
   * 
   * @example
   * 1
   */
  id?: number;
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
   * The rule ID.
   * 
   * @example
   * 12345
   */
  ruleId?: string;
  /**
   * @remarks
   * The status.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The UUID of the alert rule template.
   * 
   * @example
   * template-prometheus-ack-node-cpu-usage-exceeds-85
   */
  templateUuid?: string;
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 1654218965343050
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      applyConfig: 'applyConfig',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      regionId: 'regionId',
      ruleId: 'ruleId',
      status: 'status',
      templateUuid: 'templateUuid',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyConfig: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      regionId: 'string',
      ruleId: 'string',
      status: 'string',
      templateUuid: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

