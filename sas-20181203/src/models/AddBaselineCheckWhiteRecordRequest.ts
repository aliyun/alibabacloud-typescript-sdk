// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddBaselineCheckWhiteRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * >  You can call the [ListCheckItemWarningSummary](~~ListCheckItemWarningSummary~~) operation to query the IDs of check items.
   * 
   * @example
   * 76
   */
  checkId?: number;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The reason why the check item is added to the whitelist.
   * 
   * @example
   * AutoRun
   */
  reason?: string;
  /**
   * @remarks
   * The data source. If you leave this parameter empty, the default value is used. Valid values:
   * 
   * *   **default**: server
   * *   **agentless**: agentless detection
   * 
   * @example
   * agentless
   */
  source?: string;
  /**
   * @remarks
   * The type of the assets on which the whitelist rule takes effect. Valid values:
   * 
   * *   **all_instance**: all servers
   * *   **instance**: specific servers
   * 
   * @example
   * instance
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      lang: 'Lang',
      reason: 'Reason',
      source: 'Source',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      lang: 'string',
      reason: 'string',
      source: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

