// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceObjectBindingsResponseBodyObjectBindings extends $dara.Model {
  /**
   * @remarks
   * The semantic graph name to which the binding object belongs (object_id is unique within this graph. Required).
   * 
   * @example
   * string_value
   */
  graphName?: string;
  /**
   * @remarks
   * The binding object ID.
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * The binding object type (such as customer or project).
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

export class ReplaceObjectBindingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The object binding.
   */
  objectBindings?: ReplaceObjectBindingsResponseBodyObjectBindings[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the personal FILE data source to be replaced (unique within the tenant).
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
      objectBindings: { 'type': 'array', 'itemType': ReplaceObjectBindingsResponseBodyObjectBindings },
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

