// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelCopilotTurnRequest extends $dara.Model {
  /**
   * @remarks
   * The conversation ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 54b6c969-4b75-47be-9f43-71f88aeb****
   */
  conversationId?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region where the Threat Analysis data management center is located. Specify the management center based on the region of your assets. Valid values:
   * - cn-hangzhou: Your assets reside in the Chinese mainland.
   * - ap-southeast-1: Your assets reside in regions outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The trace ID used to track the service request.
   * 
   * @example
   * 550e8400e29b41d4a71644665544****
   */
  traceId?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dc18b894-19a3-45ee-8768-a59478e0****
   */
  turnId?: string;
  static names(): { [key: string]: string } {
    return {
      conversationId: 'ConversationId',
      lang: 'Lang',
      regionId: 'RegionId',
      traceId: 'TraceId',
      turnId: 'TurnId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      conversationId: 'string',
      lang: 'string',
      regionId: 'string',
      traceId: 'string',
      turnId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

