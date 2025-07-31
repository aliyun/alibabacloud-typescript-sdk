// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataQualityAlertRuleShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * results.any { r -> r.status == \\"fail\\" && r.rule.severity == \\"High\\" }
   */
  condition?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  notificationShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  projectId?: number;
  /**
   * @remarks
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

