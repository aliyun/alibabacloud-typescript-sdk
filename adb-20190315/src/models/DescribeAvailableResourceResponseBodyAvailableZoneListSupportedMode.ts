// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialList } from "./DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialList";


export class DescribeAvailableResourceResponseBodyAvailableZoneListSupportedMode extends $dara.Model {
  /**
   * @remarks
   * The supported mode. Valid values:
   * 
   * *   **flexible**: elastic mode.
   * *   **reserver**: reserved mode.
   * 
   * @example
   * flexible
   */
  mode?: string;
  /**
   * @remarks
   * The supported editions.
   */
  supportedSerialList?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialList[];
  static names(): { [key: string]: string } {
    return {
      mode: 'Mode',
      supportedSerialList: 'SupportedSerialList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mode: 'string',
      supportedSerialList: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListSupportedModeSupportedSerialList },
    };
  }

  validate() {
    if(Array.isArray(this.supportedSerialList)) {
      $dara.Model.validateArray(this.supportedSerialList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

