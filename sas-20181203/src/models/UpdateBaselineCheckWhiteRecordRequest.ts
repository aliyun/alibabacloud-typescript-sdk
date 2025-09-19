// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBaselineCheckWhiteRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * >  You can call the [ListCheckItemWarningSummary](~~ListCheckItemWarningSummary~~) operation to query the IDs of check items.
   * 
   * @example
   * 16
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
   * The ID of the whitelist record.
   * 
   * @example
   * 14
   */
  recordId?: number;
  /**
   * @remarks
   * A list of asset UUIDs from which container names need to be removed from the whitelist.
   */
  removeContainerUuids?: string[];
  /**
   * @remarks
   * The data source. Valid values:
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

