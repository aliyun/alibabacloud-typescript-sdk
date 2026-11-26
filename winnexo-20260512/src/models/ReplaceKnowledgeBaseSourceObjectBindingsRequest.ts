// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReplaceKnowledgeBaseSourceObjectBindingsRequestObjectBindings extends $dara.Model {
  /**
   * @remarks
   * The name of the semantic graph to which the bound object belongs. The object ID is unique within this graph. This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * string_value
   */
  graphName?: string;
  /**
   * @remarks
   * The ID of the bound object.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleObjectId
   */
  objectId?: string;
  /**
   * @remarks
   * The object type to attach, such as customer or project.
   * 
   * This parameter is required.
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

export class ReplaceKnowledgeBaseSourceObjectBindingsRequest extends $dara.Model {
  /**
   * @remarks
   * token
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * The object bindings.
   * 
   * This parameter is required.
   */
  objectBindings?: ReplaceKnowledgeBaseSourceObjectBindingsRequestObjectBindings[];
  /**
   * @remarks
   * The code of the operator.
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * The ID of the data source to be re-parsed. The ID is unique within the tenant.
   * 
   * This parameter is required.
   * 
   * @example
   * exampleSourceId
   */
  sourceId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. For winnexo-cli, pass this parameter explicitly by using --tenant-id.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      objectBindings: 'objectBindings',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      sourceId: 'sourceId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      objectBindings: { 'type': 'array', 'itemType': ReplaceKnowledgeBaseSourceObjectBindingsRequestObjectBindings },
      opsUserCode: 'string',
      opsUserId: 'string',
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

