// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListClassesResponseBodyItems } from "./ListClassesResponseBodyItems";


export class ListClassesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of instance specifications.
   */
  items?: ListClassesResponseBodyItems[];
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CF8D35BF-263D-4F7B-883A-1163B79A9EC6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': ListClassesResponseBodyItems },
      regionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

