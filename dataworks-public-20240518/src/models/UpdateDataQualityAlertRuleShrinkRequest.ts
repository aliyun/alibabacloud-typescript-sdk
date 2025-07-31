// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataQualityAlertRuleShrinkRequest extends $dara.Model {
  /**
   * @example
   * results.any { r -> r.status == \\"fail\\" && r.rule.severity == \\"High\\" }
   */
  condition?: string;
  /**
   * @example
   * 105412
   */
  id?: number;
  notificationShrink?: string;
  /**
   * @example
   * 1000
   */
  projectId?: number;
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

