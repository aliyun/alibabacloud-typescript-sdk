// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVscMountPointRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e389e5c7-bcb4-4558-846a-e5afc444****
   */
  fileSystemId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  inputRegionId?: string;
  /**
   * @example
   * [
   *       "i-bp1g6zv0ce8oghu7****",
   *       "i-bp1g6zv0ce8oghu1****"
   * ]
   */
  instanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      fileSystemId: 'FileSystemId',
      inputRegionId: 'InputRegionId',
      instanceIds: 'InstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      fileSystemId: 'string',
      inputRegionId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

