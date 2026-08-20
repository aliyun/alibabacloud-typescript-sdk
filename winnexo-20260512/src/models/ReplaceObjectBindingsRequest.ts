// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceObjectBindingsRequestObjectBindings extends $dara.Model {
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

export class ReplaceObjectBindingsRequest extends $dara.Model {
  /**
   * @remarks
   * The new list of object bindings (full replacement. Pass an empty list to clear all bindings).
   * 
   * This parameter is required.
   */
  objectBindings?: ReplaceObjectBindingsRequestObjectBindings[];
  /**
   * @remarks
   * The ID of the personal FILE data source to be replaced (unique within the tenant).
   * 
   * This parameter is required.
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. Pass it explicitly through winnexo-cli using --tenant-id.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      objectBindings: 'objectBindings',
      sourceId: 'sourceId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectBindings: { 'type': 'array', 'itemType': ReplaceObjectBindingsRequestObjectBindings },
      sourceId: 'string',
      tenantId: 'string',
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

