// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateModelGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the model group. This parameter can be empty and contain up to 1,024 UTF-16 code units.
   * 
   * @example
   * Model group for service integration
   */
  description?: string;
  /**
   * @remarks
   * The ID of the AI gateway instance to which the resource belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * gw-d00000000000000000000
   */
  gatewayId?: string;
  /**
   * @remarks
   * The IDs of the actual or logical models within the same instance. This parameter can be empty, but the IDs must be unique. Model groups cannot be used as members.
   * 
   * This parameter is required.
   */
  modelCardIds?: string[];
  /**
   * @remarks
   * The unique name within the instance. It must be 1 to 128 bytes in length after trimming and encoded in UTF-8.
   * 
   * This parameter is required.
   * 
   * @example
   * beta-model-group
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      gatewayId: 'gatewayId',
      modelCardIds: 'modelCardIds',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      gatewayId: 'string',
      modelCardIds: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.modelCardIds)) {
      $dara.Model.validateArray(this.modelCardIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

