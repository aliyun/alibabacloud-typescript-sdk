// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcpProductToolsResponseBodyDataTools extends $dara.Model {
  /**
   * @remarks
   * The annotations of the tool. This is a map structure. The API definition declares it only as map<any> without specifying its members and usage.
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
   * The input parameter schema of the tool. This is a map structure. The API definition declares it only as map<any> without specifying its members and constraints.
   */
  inputSchema?: { [key: string]: any };
  /**
   * @remarks
   * The metadata of the tool. This is a map structure. The API definition declares it only as map<any> without specifying its members and usage.
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
   * The output schema of the tool. This is a map structure. The API definition declares it only as map<any> without specifying its members and constraints.
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
   * The list of MCP tools. Each element in the list is named tool and represents an MCP tool.
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

