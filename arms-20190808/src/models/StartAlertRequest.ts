// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAlertRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert rule. You can call the SearchAlertRules operation and view the `Id` parameter in the response. For more information, see [SearchAlertRules](https://help.aliyun.com/document_detail/175825.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 1610***
   */
  alertId?: string;
  /**
   * @remarks
   * The ID of the region. Set the value to `cn-hangzhou`.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'string',
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

