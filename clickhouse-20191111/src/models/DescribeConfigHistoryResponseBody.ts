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
   * The UID of the Alibaba Cloud account.
   * 
   * @example
   * 253460731706911258
   */
  ownerId?: string;
  /**
   * @remarks
   * The reason for the parameter change.
   * 
   * @example
   * test
   */
  reason?: string;
  /**
   * @remarks
   * Indicates whether the parameter change took effect. Valid values:
   * 
   * - **true**: The change took effect.
   * 
   * - **false**: The change did not take effect.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The time when the change was made. Use the yyyy-MM-ddTHH:mm:ssZ format. The time is in UTC.
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

export class DescribeConfigHistoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The change history of the configuration parameters.
   */
  configHistoryItems?: DescribeConfigHistoryResponseBodyConfigHistoryItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D0CEC6AC-7760-409A-A0D5-E6CD8660E9CC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configHistoryItems: 'ConfigHistoryItems',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configHistoryItems: { 'type': 'array', 'itemType': DescribeConfigHistoryResponseBodyConfigHistoryItems },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configHistoryItems)) {
      $dara.Model.validateArray(this.configHistoryItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

