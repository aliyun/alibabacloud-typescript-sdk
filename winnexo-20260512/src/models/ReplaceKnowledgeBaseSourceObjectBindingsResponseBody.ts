// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceKnowledgeBaseSourceObjectBindingsResponseBodyObjectBindings extends $dara.Model {
  /**
   * @remarks
   * The name of the semantic graph to which the bound object belongs. The object ID is unique within this graph. This parameter is required.
   * 
   * @example
   * string_value
   */
  graphName?: string;
  /**
   * @remarks
   * The ID of the bound object.
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * The object type to attach, such as customer or project.
   * 
   * @example
   * string_value
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      graphName: 'graphName',
      objectId: 'objectId',
      objectType: 'objectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      graphName: 'string',
      objectId: 'string',
      objectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ReplaceKnowledgeBaseSourceObjectBindingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The status code description.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The object bindings.
   */
  objectBindings?: ReplaceKnowledgeBaseSourceObjectBindingsResponseBodyObjectBindings[];
  /**
   * @remarks
   * The request tracking ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the personal FILE data source to be replaced. The ID is unique within the tenant.
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      objectBindings: 'objectBindings',
      requestId: 'requestId',
      sourceId: 'sourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      objectBindings: { 'type': 'array', 'itemType': ReplaceKnowledgeBaseSourceObjectBindingsResponseBodyObjectBindings },
      requestId: 'string',
      sourceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.objectBindings)) {
      $dara.Model.validateArray(this.objectBindings);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

