// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScriptProfileTemplatesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1752829090000
   */
  createdTime?: number;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Build professional conversational prompt engineering from a blank document
   */
  description?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * General scenario
   */
  name?: string;
  /**
   * @remarks
   * The template definition.
   * 
   * @example
   * {
   *   "name": "General",
   *   "properties": {
   *     "prompts": {
   *       "displayName": "Instruction information",
   *       "dataType": "TEXT",
   *       "name": "prompts",
   *       "displayOrder": 1,
   *       "defaultValue": "You are a friendly and approachable chat assistant, focusing on natural Chinese conversations. Stay positive and patient, provide helpful responses, and avoid sensitive content. Honestly admit when you do not know the answer to create a relaxed and pleasant communication experience.",
   *       "attributes": {
   *         "placeholder": "You are a friendly and approachable chat assistant, focusing on natural Chinese conversations. Stay positive and patient, provide helpful responses, and avoid sensitive content. Honestly admit when you do not know the answer to create a relaxed and pleasant communication experience.",
   *         "rows": 20
   *       },
   *       "editorType": "MENTIONS_TEXTAREA",
   *       "maxLength": 2000,
   *       "required": true,
   *       "group": "Business description"
   *     }
   *   }
   * }
   */
  schema?: string;
  /**
   * @remarks
   * The template ID.
   * 
   * @example
   * CCC_PROMPTS_DEFAULT
   */
  templateId?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 1752829090000
   */
  updatedTime?: number;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      name: 'Name',
      schema: 'Schema',
      templateId: 'TemplateId',
      updatedTime: 'UpdatedTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'number',
      description: 'string',
      name: 'string',
      schema: 'string',
      templateId: 'string',
      updatedTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListScriptProfileTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The internal error code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The list of scenario templates.
   */
  data?: ListScriptProfileTemplatesResponseBodyData[];
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
   * The error message.
   * 
   * @example
   * Instance af81a389-91f0-4157-8d82-720edd02b66a
   *  does not exist.
   */
  message?: string;
  /**
   * @remarks
   * The list of error parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E6E61E1A-D2DC-5ACF-AED4-A115B6691F98
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListScriptProfileTemplatesResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

