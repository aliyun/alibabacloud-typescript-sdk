// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListContactFlowsResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The ID of the IVR contact flow.
   * 
   * @example
   * 78128960-bb00-4ddc-8e82-923a8c5bd22d
   */
  contactFlowId?: string;
  /**
   * @remarks
   * When the contact flow was created.
   * 
   * @example
   * 2021-03-05 17:35:45.0
   */
  createdTime?: string;
  /**
   * @remarks
   * The JSON-formatted definition of the IVR contact flow. This parameter is for internal use and is parsed by the backend.
   * 
   * @example
   * {"activities":[{"type":"INCOMING_CALL","id":"e98f0d47","name":"开始","properties":{"position":{"x":263,"y":164}},"events":[{"event":"complete","next":"2d3ad2c2","edgeId":"41f7dbd0"}],"nodeIndex":0},{"type":"HANGUP","id":"bd4f37e2","name":"挂机","properties":{"position":{"x":765,"y":185}},"events":[{"event":"complete","next":null}],"nodeIndex":999},{"type":"PLAY_SAY","id":"2d3ad2c2","name":"放音","properties":{"say":"您好，欢迎来到云联络中心。","audioResourceId":"","position":{"x":485.5,"y":153.5},"audioType":"tts","audioInterrupt":false},"events":[{"event":"complete","next":"bd4f37e2","edgeId":"e1af4f1f"}],"nodeIndex":1}],"description":""}
   */
  definition?: string;
  /**
   * @remarks
   * The description of the contact flow version.
   * 
   * @example
   * 1.0
   */
  description?: string;
  /**
   * @remarks
   * The draft ID. This parameter is returned only when the contact flow is unpublished.
   * 
   * @example
   * db07c0bb-6b1f-47d2-b37e-2451c617562d
   */
  draftId?: string;
  /**
   * @remarks
   * The login name of the agent currently editing this draft.
   * 
   * @example
   * ccc-test
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
   * The name of the IVR contact flow.
   * 
   * @example
   * 默认流程
   */
  name?: string;
  /**
   * @remarks
   * A list of phone numbers that are bound to the IVR contact flow.
   */
  numberList?: string[];
  /**
   * @remarks
   * Indicates whether the contact flow has been published.
   * 
   * @example
   * true
   */
  published?: boolean;
  /**
   * @remarks
   * The type of the IVR contact flow.
   * 
   * @example
   * MAIN_FLOW
   */
  type?: string;
  /**
   * @remarks
   * The last time the contact flow was updated.
   * 
   * @example
   * 2021-03-08 15:34:49.0
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
      numberList: 'NumberList',
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
      numberList: { 'type': 'array', 'itemType': 'string' },
      published: 'boolean',
      type: 'string',
      updatedTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.numberList)) {
      $dara.Model.validateArray(this.numberList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactFlowsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A list of contact flows.
   */
  list?: ListContactFlowsResponseBodyDataList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListContactFlowsResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListContactFlowsResponseBody extends $dara.Model {
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
   * The data returned.
   */
  data?: ListContactFlowsResponseBodyData;
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
   * EEEE671A-3E24-4A04-81E6-6C4F5B39DF75
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
      data: ListContactFlowsResponseBodyData,
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

