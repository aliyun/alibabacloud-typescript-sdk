// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNetworkAttributeResponseBodyCloudResourcesCloudResourceSetType extends $dara.Model {
  /**
   * @remarks
   * The number of resources in the network.
   * 
   * @example
   * 3
   */
  resourceCount?: number;
  /**
   * @remarks
   * The resource type. VSwitch.
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

