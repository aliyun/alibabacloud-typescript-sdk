// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateModelRequestTag } from "./CreateModelRequestTag";


export class CreateModelRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the model definition.
   * 
   * @example
   * Model Description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the API group to which the model belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 30e792398d6c4569b04c0e53a3494381
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the model. The name must be unique within the group.
   * 
   * This parameter is required.
   * 
   * @example
   * Test
   */
  modelName?: string;
  /**
   * @remarks
   * The definition of the model in JSON Schema.
   * 
   * This parameter is required.
   * 
   * @example
   * {"type":"object","properties":{"id":{"format":"int64","maximum":100,"exclusiveMaximum":true,"type":"integer"},"name":{"maxLength":10,"type":"string"}}}
   */
  schema?: string;
  /**
   * @remarks
   * The object tags that match the lifecycle rule. You can specify multiple tags.
   */
  tag?: CreateModelRequestTag[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      groupId: 'GroupId',
      modelName: 'ModelName',
      schema: 'Schema',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      groupId: 'string',
      modelName: 'string',
      schema: 'string',
      tag: { 'type': 'array', 'itemType': CreateModelRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

