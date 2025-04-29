// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUAIDApplyTokenSignRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * HwD97InG
   */
  authCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * CM
   */
  carrier?: string;
  /**
   * @remarks
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
   * This parameter is required.
   * 
   * @example
   * b8b5b3a*******0b9893484fdf412c99
   */
  outId?: string;
  ownerId?: number;
  /**
   * @example
   * 955EC1A869852EA8BC66F********D7C6E92017BBD5B001C736EFEAFB775C232
   */
  paramKey?: string;
  /**
   * @example
   * B2F0D4CD7A216D16CE2AF4BBC********29A454FDDD991F919106C12CB89ABA8
   */
  paramStr?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
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

