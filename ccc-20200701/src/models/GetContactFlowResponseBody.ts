// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetContactFlowResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The contact flow ID.
   * 
   * @example
   * 274601be-a6d5-4429-bcef-32b51d031c6e
   */
  contactFlowId?: string;
  /**
   * @remarks
   * The time when the contact flow draft was created.
   * 
   * @example
   * 2021-07-14 10:48:43.0
   */
  createdTime?: string;
  /**
   * @remarks
   * IVR content.
   * 
   * @example
   * {"activities":[{"type":"INCOMING_CALL","id":"e98f0d47","name":"开始","properties":{"position":{"x":263,"y":164}},"events":[{"event":"complete","next":"2d3ad2c2","edgeId":"41f7dbd0"}],"nodeIndex":0},{"type":"HANGUP","id":"bd4f37e2","name":"挂机","properties":{"position":{"x":765,"y":185}},"events":[{"event":"complete","next":null}],"nodeIndex":999},{"type":"PLAY_SAY","id":"2d3ad2c2","name":"放音","properties":{"say":"您好，欢迎来到云联络中心。","audioResourceId":"","position":{"x":485.5,"y":153.5},"audioType":"tts","audioInterrupt":false},"events":[{"event":"complete","next":"bd4f37e2","edgeId":"e1af4f1f"}],"nodeIndex":1}],"description":""}
   */
  definition?: string;
  /**
   * @remarks
   * The version description.
   * 
   * @example
   * 1.0
   */
  description?: string;
  /**
   * @remarks
   * The draft ID. This is the ID of the editable draft version for the current contact flow.
   * 
   * @example
   * 566399d7-5558-447c-a72f-9be2768b6a82
   */
  draftId?: string;
  /**
   * @remarks
   * The agent login name of the current editor of this draft.
   * 
   * @example
   * editor-xxx
   */
  editor?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The IVR name.
   * 
   * @example
   * 欢迎语
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the contact flow is published.
   * True: Published
   * False: Not published
   * 
   * @example
   * False
   */
  published?: boolean;
  /**
   * @remarks
   * The flow type:<br>
   * MAIN_FLOW (main flow)<br>
   * SUB_FLOW (child flow)<br>
   * SURVEY_FLOW (survey flow)<br><br><br>
   * 
   * @example
   * MAIN_FLOW
   */
  type?: string;
  /**
   * @remarks
   * The time when the contact flow was last updated.
   * 
   * @example
   * 2021-07-14 10:48:43.0
   */
  updatedTime?: string;
  static names(): { [key: string]: string } {
    return {
      contactFlowId: 'ContactFlowId',
      createdTime: 'CreatedTime',
      definition: 'Definition',
      description: 'Description',
      draftId: 'DraftId',
      editor: 'Editor',
      instanceId: 'InstanceId',
      name: 'Name',
      published: 'Published',
      type: 'Type',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactFlowId: 'string',
      createdTime: 'string',
      definition: 'string',
      description: 'string',
      draftId: 'string',
      editor: 'string',
      instanceId: 'string',
      name: 'string',
      published: 'boolean',
      type: 'string',
      updatedTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetContactFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetContactFlowResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2263B273-AC1B-44EB-BA98-87F2322C6780
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetContactFlowResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

