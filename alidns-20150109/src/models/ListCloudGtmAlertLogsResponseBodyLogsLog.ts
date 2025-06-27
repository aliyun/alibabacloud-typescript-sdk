// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudGtmAlertLogsResponseBodyLogsLog extends $dara.Model {
  /**
   * @remarks
   * Alert type:
   * - ALERT
   * - RESUME
   * 
   * @example
   * ALERT
   */
  actionType?: string;
  /**
   * @remarks
   * The alert content.
   * 
   * @example
   * The alert content.
   */
  content?: string;
  /**
   * @remarks
   * Alarm object types:
   * - GTM_ADDRESS: Address
   * - GTM_ADDRESS_POOL: Address Pool
   * - GTM_INSTANCE: Instance
   * - GTM_MONITOR_TEMPLATE: Health Check Template
   * 
   * @example
   * GTM_ADDRESS
   */
  entityType?: string;
  /**
   * @remarks
   * Alert log time (timestamp).
   * 
   * @example
   * 1711328826977
   */
  timestamp?: number;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      content: 'Content',
      entityType: 'EntityType',
      timestamp: 'Timestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      content: 'string',
      entityType: 'string',
      timestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

