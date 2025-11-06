// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FetchStaticAccountRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * yourAccessKeyID
   */
  accountAccessKey?: string;
  consoleSessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1671175303522
   */
  createTimeStamp?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * amqp-xxx
   */
  instanceId?: string;
  /**
   * @example
   * 备注示例
   */
  remark?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 22c2d7d1769cb53c5a6d9213248e2de524******
   */
  SKey?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4c1a6367ce4c4255e9617326f9133ac635******
   */
  secretSign?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Mjo****************
   */
  userName?: string;
  static names(): { [key: string]: string } {
    return {
      accountAccessKey: 'AccountAccessKey',
      consoleSessionId: 'ConsoleSessionId',
      createTimeStamp: 'CreateTimeStamp',
      instanceId: 'InstanceId',
      remark: 'Remark',
      SKey: 'SKey',
      secretSign: 'SecretSign',
      userName: 'UserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountAccessKey: 'string',
      consoleSessionId: 'string',
      createTimeStamp: 'number',
      instanceId: 'string',
      remark: 'string',
      SKey: 'string',
      secretSign: 'string',
      userName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

