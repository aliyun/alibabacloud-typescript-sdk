// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPropertyValueResponseBodyPropertyValueInfos } from "./ListPropertyValueResponseBodyPropertyValueInfos";


export class ListPropertyValueResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about property values.
   */
  propertyValueInfos?: ListPropertyValueResponseBodyPropertyValueInfos[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C52013A5-3422-5D1F-B22C-A57110972AD9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      propertyValueInfos: 'PropertyValueInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertyValueInfos: { 'type': 'array', 'itemType': ListPropertyValueResponseBodyPropertyValueInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.propertyValueInfos)) {
      $dara.Model.validateArray(this.propertyValueInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

