// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DecreaseNodeGroupParam extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * G-21E39B11837E****
   */
  nodeGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  releaseInstanceIds?: string[];
  static names(): { [key: string]: string } {
    return {
      nodeGroupId: 'NodeGroupId',
      releaseInstanceIds: 'ReleaseInstanceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodeGroupId: 'string',
      releaseInstanceIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.releaseInstanceIds)) {
      $dara.Model.validateArray(this.releaseInstanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

