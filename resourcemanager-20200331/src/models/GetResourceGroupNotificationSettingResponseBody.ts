// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceGroupNotificationSettingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7F70D09B-0EE5-54A6-A09A-1EBDB9297172
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the group event notification is enabled.
   * 
   * @example
   * true
   */
  resourceGroupNotificationEnableStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceGroupNotificationEnableStatus: 'ResourceGroupNotificationEnableStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceGroupNotificationEnableStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

