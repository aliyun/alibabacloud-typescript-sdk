// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCustomScriptTemplatesResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The ID of the custom scenario template.
   * 
   * @example
   * d31794e2a51f47d2901b4094d88311d7
   */
  agentProfileId?: string;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1741338619000
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the custom scenario template.
   * 
   * @example
   * This is a large language model bot
   */
  description?: string;
  /**
   * @remarks
   * The instance ID to which the template belongs.
   * 
   * @example
   * e49ad122-15a1-443a-a102-84a78a93be79
   */
  instanceId?: string;
  /**
   * @remarks
   * The label description. The value is a string in JSON array format.
   * 
   * @example
   * [{\\"name\\":\\"Delivered\\",\\"description\\":\\"Whether the purchased home appliance has been delivered\\",\\"valueList\\":\\"[\\\\\\"Yes\\\\\\",\\\\\\"No\\\\\\"]\\"},{\\"name\\":\\"Appointment time for on-site service\\",\\"description\\":\\"Collect the customer\\"s expected on-site installation time\\",\\"valueList\\":\\"[]\\"}]
   */
  labelsJson?: string;
  /**
   * @remarks
   * The ID of the model used.
   * 
   * @example
   * model_002
   */
  model?: string;
  /**
   * @remarks
   * The name of the custom scenario template.
   * 
   * @example
   * Test scenario
   */
  name?: string;
  /**
   * @remarks
   * The prompt in professional mode.
   * 
   * @example
   * \\nName: Annie \\nRole: Game Promoter\\nBackground: Promote the latest benefit events to players over the phone to ensure that every player stays informed and enjoys the game.\\nSkills: As a game customer service representative, recommend time-limited game benefit events to users, highlight the benefits, and explain how to participate.\\nConstraints: You must remember that you are Annie,
   */
  prompt?: string;
  /**
   * @remarks
   * The agent configuration. The value is a string in JSON format.
   * 
   * @example
   * {"name":"Xiao X","gender":"Male","age":18,"role":"Game Promoter","communicationStyle":["Friendly"],"goals":"Hello","background":"Not very good","openingPrompt":"Hello, I am XXX"}
   */
  promptJson?: string;
  /**
   * @remarks
   * The ID of the scenario associated with the custom scenario template.
   * 
   * @example
   * 43972417-0657-452a-81c2-c59d8245a9b2
   */
  scriptId?: string;
  static names(): { [key: string]: string } {
    return {
      agentProfileId: 'AgentProfileId',
      createTime: 'CreateTime',
      description: 'Description',
      instanceId: 'InstanceId',
      labelsJson: 'LabelsJson',
      model: 'Model',
      name: 'Name',
      prompt: 'Prompt',
      promptJson: 'PromptJson',
      scriptId: 'ScriptId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentProfileId: 'string',
      createTime: 'string',
      description: 'string',
      instanceId: 'string',
      labelsJson: 'string',
      model: 'string',
      name: 'string',
      prompt: 'string',
      promptJson: 'string',
      scriptId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCustomScriptTemplatesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of custom scenario templates.
   */
  list?: ListCustomScriptTemplatesResponseBodyDataList[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of custom scenario templates.
   * 
   * @example
   * 15
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
      list: { 'type': 'array', 'itemType': ListCustomScriptTemplatesResponseBodyDataList },
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

export class ListCustomScriptTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListCustomScriptTemplatesResponseBodyData;
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
   * Not used.
   * 
   * @example
   * Not used
   */
  maxResults?: number;
  /**
   * @remarks
   * The message returned by the API operation.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Not used.
   * 
   * @example
   * Not used
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListCustomScriptTemplatesResponseBodyData,
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
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

