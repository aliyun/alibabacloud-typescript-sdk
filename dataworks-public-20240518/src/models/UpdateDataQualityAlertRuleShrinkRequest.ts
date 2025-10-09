// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataQualityAlertRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The alert condition of the data quality monitoring rule.
   * 
   * @example
   * results.any { r -> r.status == \\"fail\\" && r.rule.severity == \\"High\\" }
   */
  condition?: string;
  /**
   * @remarks
   * The ID of the alert rule.
   * 
   * @example
   * 105412
   */
  id?: number;
  /**
   * @remarks
   * Alert notification configurations.
   */
  notificationShrink?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 1000
   */
  projectId?: number;
  /**
   * @remarks
   * The monitored target of the data quality monitoring rule.
   */
  targetShrink?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      id: 'Id',
      notificationShrink: 'Notification',
      projectId: 'ProjectId',
      targetShrink: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
      id: 'number',
      notificationShrink: 'string',
      projectId: 'number',
      targetShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

