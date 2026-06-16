// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIMBotsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the agent runtime.
   */
  agentRuntimeId?: string;
  /**
   * @remarks
   * The business type of the bot.
   */
  botBizType?: string;
  /**
   * @remarks
   * The name of the IM bot. The system performs a case-insensitive substring search.
   */
  botName?: string;
  /**
   * @remarks
   * The page number. Must be greater than or equal to 1. Default: 1.
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Valid values: 1–100. Default: 20.
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the bot.
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      agentRuntimeId: 'agentRuntimeId',
      botBizType: 'botBizType',
      botName: 'botName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentRuntimeId: 'string',
      botBizType: 'string',
      botName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

