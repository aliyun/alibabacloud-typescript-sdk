// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateModelGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The description. This field can be null and contains up to 1,024 UTF-16 code units.
   * 
   * @example
   * Model group for business integration
   */
  description?: string;
  /**
   * @remarks
   * The group version obtained from the most recent Get operation. A stale version returns Conflict.ModelGroupChanged. Submitting the same expectedVersion, name, description, and modelCardIds as-is retries the Failed or PartiallyFailed configuration of the same version, reuses the operationId, and does not increment the group version. Pending, Running, or Succeeded states are not forcibly reset.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  expectedVersion?: number;
  /**
   * @remarks
   * The actual or logical model identities within the same instance. This field can be null and must not contain duplicates. Model groups are not accepted as members.
   * 
   * This parameter is required.
   */
  modelCardIds?: string[];
  /**
   * @remarks
   * The unique name within the instance. The length is 1 to 128 UTF-8 bytes after trimming.
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
      expectedVersion: 'expectedVersion',
      modelCardIds: 'modelCardIds',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      expectedVersion: 'number',
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

