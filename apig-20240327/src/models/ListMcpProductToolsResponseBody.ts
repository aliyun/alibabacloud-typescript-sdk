// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcpProductToolsResponseBodyDataTools extends $dara.Model {
  /**
   * @remarks
   * The annotation information of the tool, formatted as a map. The API definition declares this field only as map<any> without specifying its members or purposes.
   * 
   * @example
   * {"readOnly":true}
   */
  annotations?: { [key: string]: any };
  /**
   * @remarks
   * The description of the tool.
   * 
   * @example
   * Functional description of the sample tool
   */
  description?: string;
  /**
   * @remarks
   * The input parameter schema of the tool, formatted as a map. The API definition declares this field only as map<any> without specifying its members or constraints.
   * 
   * @example
   * {"type":"object","properties":{"query":{"type":"string"}}}
   */
  inputSchema?: { [key: string]: any };
  /**
   * @remarks
   * The metadata of the tool, formatted as a map. The API definition declares this field only as map<any> without specifying its members or purposes.
   * 
   * @example
   * {"version":"1.0.0"}
   */
  meta?: { [key: string]: any };
  /**
   * @remarks
   * The name of the tool.
   * 
   * @example
   * test-tool
   */
  name?: string;
  /**
   * @remarks
   * The output result schema of the tool, formatted as a map. The API definition declares this field only as map<any> without specifying its members or constraints.
   * 
   * @example
   * {"type":"object","properties":{"result":{"type":"string"}}}
   */
  outputSchema?: { [key: string]: any };
  /**
   * @remarks
   * The title of the tool.
   * 
   * @example
   * Sample tool
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'annotations',
      description: 'description',
      inputSchema: 'inputSchema',
      meta: 'meta',
      name: 'name',
      outputSchema: 'outputSchema',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      description: 'string',
      inputSchema: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      meta: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      name: 'string',
      outputSchema: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      title: 'string',
    };
  }

  validate() {
    if(this.annotations) {
      $dara.Model.validateMap(this.annotations);
    }
    if(this.inputSchema) {
      $dara.Model.validateMap(this.inputSchema);
    }
    if(this.meta) {
      $dara.Model.validateMap(this.meta);
    }
    if(this.outputSchema) {
      $dara.Model.validateMap(this.outputSchema);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcpProductToolsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of MCP tools. Each element in the list is named tool and represents a single MCP tool.
   */
  tools?: ListMcpProductToolsResponseBodyDataTools[];
  static names(): { [key: string]: string } {
    return {
      tools: 'tools',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tools: { 'type': 'array', 'itemType': ListMcpProductToolsResponseBodyDataTools },
    };
  }

  validate() {
    if(Array.isArray(this.tools)) {
      $dara.Model.validateArray(this.tools);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMcpProductToolsResponseBody extends $dara.Model {
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
  data?: ListMcpProductToolsResponseBodyData;
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
      data: ListMcpProductToolsResponseBodyData,
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

