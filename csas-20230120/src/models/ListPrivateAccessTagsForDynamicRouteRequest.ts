// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPrivateAccessTagsForDynamicRouteRequest extends $dara.Model {
  /**
   * @remarks
   * A collection of dynamic route IDs. You can enter a maximum of 100 dynamic route IDs.
   * 
   * This parameter is required.
   */
  dynamicRouteIds?: string[];
  static names(): { [key: string]: string } {
    return {
      dynamicRouteIds: 'DynamicRouteIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dynamicRouteIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dynamicRouteIds)) {
      $dara.Model.validateArray(this.dynamicRouteIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

