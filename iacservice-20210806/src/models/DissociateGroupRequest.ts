// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DissociateGroupRequest extends $dara.Model {
  /**
   * @example
   * 2daf4227f747cbf11a5501f18cc5e004
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceIds?: string[];
  /**
   * @example
   * Task
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'clientToken',
      resourceIds: 'resourceIds',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

