// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConfigHistoryResponseBodyConfigHistoryItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the change record.
   * 
   * @example
   * 1
   */
  changeId?: string;
  /**
   * @remarks
   * The user ID (UID) of the Alibaba Cloud account.
   * 
   * @example
   * 253460731706911258
   */
  ownerId?: string;
  /**
   * @remarks
   * The reason for the setting modification of the configuration parameters.
   * 
   * @example
   * test
   */
  reason?: string;
  /**
   * @remarks
   * Indicates whether the setting modification of the configuration parameters took effect. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The time when the values of the configuration parameters were changed. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-08-22T10:00:00Z
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      changeId: 'ChangeId',
      ownerId: 'OwnerId',
      reason: 'Reason',
      success: 'Success',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeId: 'string',
      ownerId: 'string',
      reason: 'string',
      success: 'boolean',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

