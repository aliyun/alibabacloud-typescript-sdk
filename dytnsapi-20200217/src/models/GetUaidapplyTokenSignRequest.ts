// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUAIDApplyTokenSignRequest extends $dara.Model {
  /**
   * @remarks
   * The authorization code.
   * 
   * > To obtain this authorization code, navigate to **Tag Plaza** in the [**Phone Number Verification Service**](https://dytns.console.aliyun.com/analysis/square) console, select a tag, and submit an application. You receive the code after your application is approved.
   * 
   * This parameter is required.
   * 
   * @example
   * HwD97InG
   */
  authCode?: string;
  /**
   * @remarks
   * The mobile carrier. Valid values:
   * 
   * - **CM**: China Mobile
   * 
   * - **CU**: China Unicom
   * 
   * - **CT**: China Telecom
   * 
   * This parameter is required.
   * 
   * @example
   * CM
   */
  carrier?: string;
  /**
   * @remarks
   * The client type. Valid values:
   * 
   * - `30100`: Android
   * 
   * - `30300`: iOS
   * 
   * - `20200`: H5
   * 
   * - `10010`: Web
   * 
   * This parameter is required.
   * 
   * @example
   * 30300
   */
  clientType?: string;
  /**
   * @example
   * 示例值示例值
   */
  format?: string;
  /**
   * @remarks
   * The external ID.
   * 
   * > For China Mobile (CM), this parameter corresponds to `traceId` and `msgId`. The values of `OutId`, `traceId`, and `msgId` must be the same.
   * 
   * This parameter is required.
   * 
   * @example
   * b8b5b3a*******0b9893484fdf412c99
   */
  outId?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required if the carrier is China Telecom (CT). For details, see the China Telecom documentation.
   * 
   * @example
   * 955EC1A869852EA8BC66F********D7C6E92017BBD5B001C736EFEAFB775C232
   */
  paramKey?: string;
  /**
   * @remarks
   * This parameter is required if the carrier is China Telecom (CT). For details, see the China Telecom documentation.
   * 
   * @example
   * B2F0D4CD7A216D16CE2AF4BBC********29A454FDDD991F919106C12CB89ABA8
   */
  paramStr?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The event timestamp, accurate to the millisecond.<br>
   * Format: `yyyyMMddHHmmssSSS`.<br>
   * 
   * This parameter is required.
   * 
   * @example
   * 20121227180001165
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      authCode: 'AuthCode',
      carrier: 'Carrier',
      clientType: 'ClientType',
      format: 'Format',
      outId: 'OutId',
      ownerId: 'OwnerId',
      paramKey: 'ParamKey',
      paramStr: 'ParamStr',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authCode: 'string',
      carrier: 'string',
      clientType: 'string',
      format: 'string',
      outId: 'string',
      ownerId: 'number',
      paramKey: 'string',
      paramStr: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
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

