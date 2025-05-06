// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSupportedResourceRelationConfigResponseBodyResourceRelationConfigList } from "./GetSupportedResourceRelationConfigResponseBodyResourceRelationConfigList";


export class GetSupportedResourceRelationConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 409D022F-394C-5AAB-A74A-2F1DC9F6375E
   */
  requestId?: string;
  /**
   * @remarks
   * An array that contains the relationships.
   */
  resourceRelationConfigList?: GetSupportedResourceRelationConfigResponseBodyResourceRelationConfigList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceRelationConfigList: 'ResourceRelationConfigList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceRelationConfigList: { 'type': 'array', 'itemType': GetSupportedResourceRelationConfigResponseBodyResourceRelationConfigList },
    };
  }

  validate() {
    if(Array.isArray(this.resourceRelationConfigList)) {
      $dara.Model.validateArray(this.resourceRelationConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

