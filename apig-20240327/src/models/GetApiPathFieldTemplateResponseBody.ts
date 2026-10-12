// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataFieldPathsValue } from "./DataFieldPathsValue";


export class GetApiPathFieldTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description text of the field template.
   * 
   * @example
   * OpenAI chat completion API..
   */
  description?: string;
  /**
   * @remarks
   * The set of fields defined by the field template, grouped by mapping key. Each group contains a set of template field items.
   */
  fieldPaths?: { [key: string]: DataFieldPathsValue[] };
  /**
   * @remarks
   * The API request path corresponding to the field template.
   * 
   * @example
   * /v1/chat/completions
   */
  path?: string;
  /**
   * @remarks
   * The API protocol applicable to the field template, such as openai.
   * 
   * @example
   * openai
   */
  protocol?: string;
  /**
   * @remarks
   * The name of the field template.
   * 
   * @example
   * OpenAI Chat Completions
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      fieldPaths: 'fieldPaths',
      path: 'path',
      protocol: 'protocol',
      templateName: 'templateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fieldPaths: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': DataFieldPathsValue } },
      path: 'string',
      protocol: 'string',
      templateName: 'string',
    };
  }

  validate() {
    if(this.fieldPaths) {
      $dara.Model.validateMap(this.fieldPaths);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetApiPathFieldTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * Ok
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: GetApiPathFieldTemplateResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 393E2630-DBE7-5221-AB35-9E740675491A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetApiPathFieldTemplateResponseBodyData,
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

