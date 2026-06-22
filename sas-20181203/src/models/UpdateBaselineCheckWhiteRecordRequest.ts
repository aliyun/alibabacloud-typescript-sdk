// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBaselineCheckWhiteRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * > Call the [ListCheckItemWarningSummary](~~ListCheckItemWarningSummary~~) operation to obtain the check item ID.
   * 
   * @example
   * 16
   */
  checkId?: number;
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The reason for adding the whitelist entry.
   * 
   * @example
   * Manually processed.
   */
  reason?: string;
  /**
   * @remarks
   * The ID of the whitelist record.
   * 
   * @example
   * 14
   */
  recordId?: number;
  /**
   * @remarks
   * The list of asset UUIDs for which container names are to be removed from the whitelist.
   */
  removeContainerUuids?: string[];
  /**
   * @remarks
   * The data source. Valid values:
   * - **default**: host
   * - **agentless**: agentless.
   * 
   * @example
   * agentless
   */
  source?: string;
  /**
   * @remarks
   * The type of the target on which the whitelist takes effect. Valid values:
   * - **all_instance**: all servers
   * - **instance**: specific servers.
   * 
   * @example
   * all_instance
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      lang: 'Lang',
      reason: 'Reason',
      recordId: 'RecordId',
      removeContainerUuids: 'RemoveContainerUuids',
      source: 'Source',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      lang: 'string',
      reason: 'string',
      recordId: 'number',
      removeContainerUuids: { 'type': 'array', 'itemType': 'string' },
      source: 'string',
      targetType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.removeContainerUuids)) {
      $dara.Model.validateArray(this.removeContainerUuids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

