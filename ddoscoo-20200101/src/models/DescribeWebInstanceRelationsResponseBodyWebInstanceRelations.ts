// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWebInstanceRelationsResponseBodyWebInstanceRelationsInstanceDetails } from "./DescribeWebInstanceRelationsResponseBodyWebInstanceRelationsInstanceDetails";


export class DescribeWebInstanceRelationsResponseBodyWebInstanceRelations extends $dara.Model {
  /**
   * @remarks
   * The domain name of the website.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The information about the instance to which a website service is added.
   */
  instanceDetails?: DescribeWebInstanceRelationsResponseBodyWebInstanceRelationsInstanceDetails[];
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      instanceDetails: 'InstanceDetails',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      instanceDetails: { 'type': 'array', 'itemType': DescribeWebInstanceRelationsResponseBodyWebInstanceRelationsInstanceDetails },
    };
  }

  validate() {
    if(Array.isArray(this.instanceDetails)) {
      $dara.Model.validateArray(this.instanceDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

