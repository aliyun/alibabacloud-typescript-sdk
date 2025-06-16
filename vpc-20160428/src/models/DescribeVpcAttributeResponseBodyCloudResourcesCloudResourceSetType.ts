// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcAttributeResponseBodyCloudResourcesCloudResourceSetType extends $dara.Model {
  /**
   * @remarks
   * The number of resources in the VPC.
   * 
   * @example
   * 1
   */
  resourceCount?: number;
  /**
   * @remarks
   * The type of resource deployed in the VPC. Valid values: Valid values:
   * 
   * *   **VSwitch**
   * *   **VRouter**
   * *   **RouteTable**
   * 
   * @example
   * VSwitch
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceCount: 'ResourceCount',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceCount: 'number',
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

