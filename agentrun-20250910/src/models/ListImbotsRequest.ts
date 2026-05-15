// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIMBotsRequest extends $dara.Model {
  agentRuntimeId?: string;
  botBizType?: string;
  botName?: string;
  /**
   * @remarks
   * 默认 1；传入时须 ≥ 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * 默认 20；传入时须 1–100
   */
  pageSize?: number;
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

