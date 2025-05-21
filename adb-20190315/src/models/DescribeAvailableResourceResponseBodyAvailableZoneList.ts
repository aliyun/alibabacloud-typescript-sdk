// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAvailableResourceResponseBodyAvailableZoneListSupportedMode } from "./DescribeAvailableResourceResponseBodyAvailableZoneListSupportedMode";


export class DescribeAvailableResourceResponseBodyAvailableZoneList extends $dara.Model {
  /**
   * @remarks
   * A reserved parameter.
   */
  supportedComputeResource?: string[];
  /**
   * @remarks
   * The supported modes.
   */
  supportedMode?: DescribeAvailableResourceResponseBodyAvailableZoneListSupportedMode[];
  /**
   * @remarks
   * A reserved parameter.
   */
  supportedStorageResource?: string[];
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-hangzhou-h
   */
  zoneId?: string;
  /**
   * @remarks
   * The name of the zone.
   * 
   * @example
   * cn-hangzhou-k
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      supportedComputeResource: 'SupportedComputeResource',
      supportedMode: 'SupportedMode',
      supportedStorageResource: 'SupportedStorageResource',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supportedComputeResource: { 'type': 'array', 'itemType': 'string' },
      supportedMode: { 'type': 'array', 'itemType': DescribeAvailableResourceResponseBodyAvailableZoneListSupportedMode },
      supportedStorageResource: { 'type': 'array', 'itemType': 'string' },
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.supportedComputeResource)) {
      $dara.Model.validateArray(this.supportedComputeResource);
    }
    if(Array.isArray(this.supportedMode)) {
      $dara.Model.validateArray(this.supportedMode);
    }
    if(Array.isArray(this.supportedStorageResource)) {
      $dara.Model.validateArray(this.supportedStorageResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

