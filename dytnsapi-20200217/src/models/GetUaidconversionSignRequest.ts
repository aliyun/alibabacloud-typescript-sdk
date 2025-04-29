// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUAIDConversionSignRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值
   */
  authCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  carrier?: string;
  /**
   * @example
   * 示例值
   */
  clientType?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  format?: string;
  /**
   * @example
   * 示例值示例值示例值
   */
  outId?: string;
  ownerId?: number;
  /**
   * @example
   * 示例值示例值
   */
  paramKey?: string;
  /**
   * @example
   * 示例值示例值
   */
  paramStr?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @example
   * 示例值示例值
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

