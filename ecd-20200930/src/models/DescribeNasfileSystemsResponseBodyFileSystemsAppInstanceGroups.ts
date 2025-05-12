// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeNASFileSystemsResponseBodyFileSystemsAppInstanceGroups extends $dara.Model {
  /**
   * @remarks
   * The ID of the delivery group.
   * 
   * @example
   * aig-0bz55ibznu9p7****
   */
  appInstanceGroupId?: string;
  /**
   * @remarks
   * The name of the delivery group.
   * 
   * @example
   * DemoDeliveryGroup
   */
  appInstanceGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupId: 'AppInstanceGroupId',
      appInstanceGroupName: 'AppInstanceGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupId: 'string',
      appInstanceGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

