// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailabilityZonesResponseBodyAvailableZones extends $dara.Model {
  /**
   * @remarks
   * The region ID. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The zone ID.
   * 
   * @example
   * cn-beijing-f
   */
  zoneId?: string;
  /**
   * @remarks
   * The zone name.
   * 
   * The returned language is determined by the **AcceptLanguage** parameter. Take the **cn-hangzhou-h** zone as an example:
   * 
   * - If **AcceptLanguage** is set to **zh**: 杭州 可用区H
   * - If **AcceptLanguage** is set to **en**: Hangzhou Zone H
   * 
   * @example
   * 杭州 可用区H
   */
  zoneName?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      zoneId: 'ZoneId',
      zoneName: 'ZoneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      zoneId: 'string',
      zoneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAvailabilityZonesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the zones where resources are available for purchase.
   */
  availableZones?: DescribeAvailabilityZonesResponseBodyAvailableZones[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 19A13A33-0FAD-5120-8AE1-B1636F74DD80
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      availableZones: 'AvailableZones',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      availableZones: { 'type': 'array', 'itemType': DescribeAvailabilityZonesResponseBodyAvailableZones },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.availableZones)) {
      $dara.Model.validateArray(this.availableZones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

