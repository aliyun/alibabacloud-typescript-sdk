// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAvailabilityZonesResponseBodyAvailableZones extends $dara.Model {
  /**
   * @remarks
   * The ID of the region. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/61933.html) operation to query the latest available regions.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the zone.
   * 
   * @example
   * cn-beijing-f
   */
  zoneId?: string;
  /**
   * @remarks
   * The name of the zone.
   * 
   * The return value of the ZoneName parameter is in the language that is specified by the **AcceptLanguage** parameter. For example, if the value of the ZoneId parameter in the response is **cn-hangzhou-h**, the following values are returned for the ZoneName parameter:
   * 
   * *   If the value of the **AcceptLanguage** parameter is **zh**, **H** is returned for the ZoneName parameter.
   * *   If the value of the **AcceptLanguage** parameter is **en**, **Hangzhou Zone H** is returned for the ZoneName parameter.
   * 
   * @example
   * Hangzhou Zone H
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
   * The details of the zones in which you can create ApsaraDB for MongoDB instances.
   */
  availableZones?: DescribeAvailabilityZonesResponseBodyAvailableZones[];
  /**
   * @remarks
   * The ID of the request.
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

