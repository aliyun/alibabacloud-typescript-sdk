// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddBaselineCheckWhiteRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * > You can call the [ListCheckItemWarningSummary](~~ListCheckItemWarningSummary~~) operation to obtain the check item ID.
   * 
   * @example
   * 76
   */
  checkId?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The reason for adding the item to the whitelist.
   * 
   * @example
   * Invalid
   */
  reason?: string;
  /**
   * @remarks
   * The data source. If this parameter is left empty, servers are queried by default. Valid values:
   * - **default**: server
   * - **agentless**: agentless
   * 
   * @example
   * agentless
   */
  source?: string;
  /**
   * @remarks
   * The type of the target to which the whitelist applies. Valid values:
   * - **all_instance**: all servers
   * - **instance**: specified servers
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

