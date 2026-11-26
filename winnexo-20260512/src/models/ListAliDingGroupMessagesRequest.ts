// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAliDingGroupMessagesRequest extends $dara.Model {
  /**
   * @remarks
   * 平台应用 Token（控制台签发）。传入后将以 opsUserId 或 opsUserCode 指定的用户身份执行
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * The session ID, typically used for JSSDK.
   * 
   * This parameter is required.
   * 
   * @example
   * cid-example
   */
  chatId?: string;
  /**
   * @remarks
   * The traffic direction. Valid values:
   * - OutBound: outbound.
   * - InBound: inbound.
   * - Both: bidirectional.
   * 
   * @example
   * newer
   */
  direction?: string;
  /**
   * @remarks
   * 代理用户编码（租户内唯一），仅当应用凭证配置为 source_uid 时使用
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * 代理用户ID（WINNEXO 平台用户ID），仅当应用凭证配置为 winnexo_uid 时使用
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  pageSize?: number;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. Pass it explicitly through `--tenant-id` in winnexo-cli.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The relationship information.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-09-08T09:00:00+08:00
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      chatId: 'chatId',
      direction: 'direction',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      pageSize: 'pageSize',
      tenantId: 'tenantId',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      chatId: 'string',
      direction: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      pageSize: 'number',
      tenantId: 'string',
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

