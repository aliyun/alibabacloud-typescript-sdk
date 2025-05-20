// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEndpointAttributeResponseBodyDataCidrList } from "./GetEndpointAttributeResponseBodyDataCidrList";


export class GetEndpointAttributeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of CIDR block.
   */
  cidrList?: GetEndpointAttributeResponseBodyDataCidrList[];
  /**
   * @remarks
   * Specifies whether the endpoint is enabled.
   * 
   * @example
   * true
   */
  endpointEnabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      cidrList: 'CidrList',
      endpointEnabled: 'EndpointEnabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cidrList: { 'type': 'array', 'itemType': GetEndpointAttributeResponseBodyDataCidrList },
      endpointEnabled: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.cidrList)) {
      $dara.Model.validateArray(this.cidrList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

