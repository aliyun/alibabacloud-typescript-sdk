// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBaselineCheckWhiteRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * > You can call the [ListCheckItemWarningSummary](~~ListCheckItemWarningSummary~~) operation to obtain the check item ID.
   * 
   * @example
   * 16
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
   * The list of UUIDs of the assets whose container names need to be removed from the whitelist.
   */
  removeContainerUuids?: string[];
  /**
   * @remarks
   * The data source. Valid values:
   * - **default**: Server
   * - **agentless**: agentless
   * 
   * @example
   * agentless
   */
  source?: string;
  /**
   * @remarks
   * The type of the target to which the whitelist applies. Valid values:
   * - **all_instance**: All servers
   * - **instance**: Specified servers
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

