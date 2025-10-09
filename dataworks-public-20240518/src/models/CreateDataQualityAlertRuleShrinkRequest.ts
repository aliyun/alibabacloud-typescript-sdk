// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityAlertRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The alert condition of the data quality monitoring rule.
   * 
   * This parameter is required.
   * 
   * @example
   * results.any { r -> r.status == \\"fail\\" && r.rule.severity == \\"High\\" }
   */
  condition?: string;
  /**
   * @remarks
   * The list of alert channels.
   * 
   * This parameter is required.
   */
  notificationShrink?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  projectId?: number;
  /**
   * @remarks
   * The monitored target of the data quality monitoring rule.
   * 
   * This parameter is required.
   */
  targetShrink?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      notificationShrink: 'Notification',
      projectId: 'ProjectId',
      targetShrink: 'Target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: 'string',
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

