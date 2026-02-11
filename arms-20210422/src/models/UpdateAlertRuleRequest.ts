// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlertRuleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  alertId?: number;
  contactGroupIds?: string;
  isAutoStart?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  templageAlertConfig?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      contactGroupIds: 'ContactGroupIds',
      isAutoStart: 'IsAutoStart',
      regionId: 'RegionId',
      templageAlertConfig: 'TemplageAlertConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      contactGroupIds: 'string',
      isAutoStart: 'boolean',
      regionId: 'string',
      templageAlertConfig: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

