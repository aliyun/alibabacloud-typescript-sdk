// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeOrgByLayerResponseBodyOrgs } from "./DescribeOrgByLayerResponseBodyOrgs";


export class DescribeOrgByLayerResponseBody extends $dara.Model {
  orgs?: DescribeOrgByLayerResponseBodyOrgs[];
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      orgs: 'Orgs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      orgs: { 'type': 'array', 'itemType': DescribeOrgByLayerResponseBodyOrgs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.orgs)) {
      $dara.Model.validateArray(this.orgs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

