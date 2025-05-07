// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRecordFileDownloadUrlRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the call record. Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view **Call Record ID** on the **Call Record Query** page.
   * 
   * This parameter is required.
   * 
   * @example
   * abcedf1234
   */
  callId?: string;
  /**
   * @remarks
   * The call initiation time in the call record. Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account). View **Call Initiated At** on the **Call Record Query** page, or view the call_time field in the Call Detail Record (CDR) receipt.
   * 
   * @example
   * 2019-03-05 12:00:00
   */
  callTime?: string;
  ownerId?: number;
  /**
   * @remarks
   * The key of the phone number pool. Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * >  This parameter is required when **ProductType** is left empty.
   * 
   * @example
   * FC123456
   */
  poolKey?: string;
  /**
   * @remarks
   * The product type. Valid values:
   * 
   * *   **AXB_170**.
   * *   **AXN_170**.
   * *   **AXN_95**.
   * *   **AXN_EXTENSION_REUSE**
   * 
   * > 
   * 
   * *   This parameter is applicable to the original key accounts of Alibaba Cloud. This parameter can be ignored for Alibaba Cloud users.
   * 
   * *   This parameter is required when **PoolKey** is left empty.
   * 
   * @example
   * AXB_170
   */
  productType?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      callId: 'CallId',
      callTime: 'CallTime',
      ownerId: 'OwnerId',
      poolKey: 'PoolKey',
      productType: 'ProductType',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callId: 'string',
      callTime: 'string',
      ownerId: 'number',
      poolKey: 'string',
      productType: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

