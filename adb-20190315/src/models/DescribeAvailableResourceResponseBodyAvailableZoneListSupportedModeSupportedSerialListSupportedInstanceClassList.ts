// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedExecutorList } from "./DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedExecutorList";
import { DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountList } from "./DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountList";


export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassList extends $dara.Model {
  /**
   * @remarks
   * The supported instance type.
   * 
   * @example
   * C32
   */
  instanceClass?: string;
  /**
   * @remarks
   * A reserved parameter.
   */
  supportedExecutorList?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedExecutorList[];
  /**
   * @remarks
   * The supported compute nodes.
   */
  supportedNodeCountList?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountList[];
  /**
   * @remarks
   * The description of the instance type.
   * 
   * @example
   * C32
   */
  tips?: string;
  static names(): { [key: string]: string } {
    return {
      instanceClass: 'InstanceClass',
      supportedExecutorList: 'SupportedExecutorList',
      supportedNodeCountList: 'SupportedNodeCountList',
      tips: 'Tips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceClass: 'string',
      supportedExecutorList: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedExecutorList },
      supportedNodeCountList: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassListSupportedNodeCountList },
      tips: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportedExecutorList)) {
      $dara.Model.validateArray(this.supportedExecutorList);
    }
    if(Array.isArray(this.supportedNodeCountList)) {
      $dara.Model.validateArray(this.supportedNodeCountList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

