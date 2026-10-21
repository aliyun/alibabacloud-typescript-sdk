// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCopilotTurnByClientMessageIdRequest extends $dara.Model {
  /**
   * @remarks
   * The client message ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 366932fb-9a83-4a2d-94dd-c925b35f****
   */
  clientMessageId?: string;
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
   * The language of the returned message. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region of the data management center for threat analysis. Select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: Select this value if your assets are located in the Chinese mainland and Hong Kong (China).
   * - ap-southeast-1: Select this value if your assets are located outside China.
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
  static names(): { [key: string]: string } {
    return {
      clientMessageId: 'ClientMessageId',
      conversationId: 'ConversationId',
      lang: 'Lang',
      regionId: 'RegionId',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientMessageId: 'string',
      conversationId: 'string',
      lang: 'string',
      regionId: 'string',
      traceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

