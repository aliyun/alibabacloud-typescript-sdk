// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class BatchQuerySessionByClientIdsResponseBodyOnlineStatusList extends $dara.Model {
  /**
   * @remarks
   * The client ID of the client. For more information about client IDs, see [Glossary](https://help.aliyun.com/document_detail/42420.html).
   * 
   * @example
   * GID_test@0001
   */
  clientId?: string;
  /**
   * @remarks
   * Indicates whether the device is online. Valid values:
   * 
   * - **true**: Online.
   * - **false**: Offline.
   * 
   * @example
   * true
   */
  onlineStatus?: boolean;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
      onlineStatus: 'OnlineStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
      onlineStatus: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchQuerySessionByClientIdsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of client statuses.
   */
  onlineStatusList?: BatchQuerySessionByClientIdsResponseBodyOnlineStatusList[];
  /**
   * @remarks
   * The request ID. It is unique for each request.
   * 
   * @example
   * 63309FDB-ED6C-46AE-B31C-A172FBA0****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      onlineStatusList: 'OnlineStatusList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineStatusList: { 'type': 'array', 'itemType': BatchQuerySessionByClientIdsResponseBodyOnlineStatusList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.onlineStatusList)) {
      $dara.Model.validateArray(this.onlineStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

