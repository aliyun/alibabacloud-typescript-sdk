// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedFlexibleResource } from "./DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedFlexibleResource";
import { DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassList } from "./DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassList";


export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialList extends $dara.Model {
  /**
   * @remarks
   * The supported edition. Valid values:
   * 
   * *   **basic**: Basic Edition.
   * *   **cluster**: Cluster Edition.
   * *   **mixed_storage**: elastic mode for Cluster Edition.
   * 
   * @example
   * mixed_storage
   */
  serial?: string;
  /**
   * @remarks
   * The supported resources in elastic mode.
   */
  supportedFlexibleResource?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedFlexibleResource[];
  /**
   * @remarks
   * The supported resources in reserved mode.
   */
  supportedInstanceClassList?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassList[];
  static names(): { [key: string]: string } {
    return {
      serial: 'Serial',
      supportedFlexibleResource: 'SupportedFlexibleResource',
      supportedInstanceClassList: 'SupportedInstanceClassList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      serial: 'string',
      supportedFlexibleResource: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedFlexibleResource },
      supportedInstanceClassList: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialListSupportedInstanceClassList },
    };
  }

  validate() {
    if(Array.isArray(this.supportedFlexibleResource)) {
      $dara.Model.validateArray(this.supportedFlexibleResource);
    }
    if(Array.isArray(this.supportedInstanceClassList)) {
      $dara.Model.validateArray(this.supportedInstanceClassList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

