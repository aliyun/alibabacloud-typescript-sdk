// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableResourceResponseBodyAvailableZoneList } from "./DescribeAvailableResourceResponseBodyAvailableZoneList";


export class DescribeAvailableResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The supported zones.
   */
  availableZoneList?: DescribeAvailableResourceResponseBodyAvailableZoneList[];
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZoneList: 'AvailableZoneList',
      regionId: 'RegionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZoneList: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneList },
      regionId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.availableZoneList)) {
      $dara.Model.validateArray(this.availableZoneList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

