// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNisInspectionResourceTypeResponseBodyResourceTypeList extends $dara.Model {
  /**
   * @example
   * EIP
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListNisInspectionResourceTypeResponseBody extends $dara.Model {
  /**
   * @example
   * D5E98683-355B-5867-8D3D-A24755F6895B
   */
  requestId?: string;
  resourceTypeList?: ListNisInspectionResourceTypeResponseBodyResourceTypeList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceTypeList: 'ResourceTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceTypeList: { 'type': 'array', 'itemType': ListNisInspectionResourceTypeResponseBodyResourceTypeList },
    };
  }

  validate() {
    if(Array.isArray(this.resourceTypeList)) {
      $dara.Model.validateArray(this.resourceTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

