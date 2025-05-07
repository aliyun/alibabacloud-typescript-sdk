// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAxbBindFixedLineRequest extends $dara.Model {
  /**
   * @remarks
   * 应用id
   * 
   * This parameter is required.
   * 
   * @example
   * ALPT_1234
   */
  appId?: string;
  /**
   * @remarks
   * 消息请求标识
   * 
   * This parameter is required.
   * 
   * @example
   * 示例值示例值示例值
   */
  orderId?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * 绑定id
   * 
   * This parameter is required.
   * 
   * @example
   * A93IOELD93
   */
  subId?: string;
  /**
   * @remarks
   * 业务时间戳，格式yyyyMMddHHmmssSSS，时间采用北京时间，24小时制，精确至毫秒
   * 
   * This parameter is required.
   * 
   * @example
   * 20161114143116001
   */
  ts?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      orderId: 'OrderId',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      subId: 'SubId',
      ts: 'Ts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      orderId: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      subId: 'string',
      ts: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

