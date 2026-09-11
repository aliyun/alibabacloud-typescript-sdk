// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAliDingGroupMessagesRequest extends $dara.Model {
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
      chatId: 'chatId',
      direction: 'direction',
      pageSize: 'pageSize',
      tenantId: 'tenantId',
      time: 'time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chatId: 'string',
      direction: 'string',
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

