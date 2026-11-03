// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSdlEventListResponseBodySdlEventDetailList extends $dara.Model {
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * test
   */
  assetName?: string;
  /**
   * @remarks
   * The private IP address of the asset.
   * 
   * @example
   * 47.100.102.XXX
   */
  assetPrivateIp?: string;
  /**
   * @remarks
   * The asset type.
   * 
   * @example
   * EIP
   */
  assetType?: string;
  /**
   * @remarks
   * The categorization of intelligence labels. Valid values:
   * 
   * - **Suspicious**: Suspicious.
   * - **Malicious**: Malicious.
   * - **Trusted**: Trusted.
   * 
   * @example
   * Trusted
   */
  categoryClassId?: string;
  /**
   * @remarks
   * The name of the category.
   * 
   * @example
   * Trusted
   */
  categoryName?: string;
  /**
   * @remarks
   * The ID of the city.
   * 
   * @example
   * 000
   */
  cityId?: string;
  /**
   * @remarks
   * The ID of the country.
   * 
   * @example
   * cn
   */
  countryId?: string;
  /**
   * @remarks
   * The destination IP address.
   * 
   * @example
   * 106.14.74.XXX
   */
  dstIp?: string;
  /**
   * @remarks
   * The destination ports.
   * 
   * @example
   * 22
   */
  dstPortList?: string;
  /**
   * @remarks
   * The number of events.
   * 
   * @example
   * 1
   */
  eventCnt?: number;
  /**
   * @remarks
   * The risk level of the event.
   * 
   * @example
   * high
   */
  eventLevel?: string;
  /**
   * @remarks
   * The name of the event.
   * 
   * @example
   * Sensitive ID card data leakage
   */
  eventName?: string;
  /**
   * @remarks
   * The time when the event first occurred. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1735697768
   */
  firstTime?: number;
  /**
   * @remarks
   * The time when the event last occurred. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1738636157
   */
  lastTime?: number;
  /**
   * @remarks
   * The name of the region to which the destination IP address belongs.
   * 
   * @example
   * Yuhang District, Hangzhou City, Zhejiang Province
   */
  locationName?: string;
  /**
   * @remarks
   * The attack payload of the intrusion prevention event.
   * 
   * @example
   * 3082002f02010004067075626c6963a082002002044c33a756020100020100308200103082000c06082b060102010105000500
   */
  payload?: string;
  /**
   * @remarks
   * The protocols.
   * 
   * @example
   * TCP
   */
  protoList?: string;
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
   * The resource ID.
   * 
   * @example
   * ce347a98f41e849188aa51c56b02a****
   */
  resourceId?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * 0
   */
  resourceIdType?: number;
  /**
   * @remarks
   * The amount of sensitive data.
   * 
   * @example
   * 10
   */
  sensitiveDataCnt?: number;
  /**
   * @remarks
   * The list of sensitive data.
   */
  sensitiveDataList?: string[];
  /**
   * @remarks
   * The sensitive data level.
   * 
   * @example
   * S3
   */
  sensitiveLevel?: string;
  /**
   * @remarks
   * The type of sensitive data.
   * 
   * @example
   * Identity Card
   */
  sensitiveType?: string;
  /**
   * @remarks
   * The source IP address.
   * 
   * @example
   * 104.28.226.XX
   */
  srcIp?: string;
  /**
   * @remarks
   * The source ports.
   * 
   * @example
   * 443
   */
  srcPortList?: string;
  /**
   * @remarks
   * The traffic volume.
   * 
   * @example
   * 0
   */
  trafficBytes?: number;
  /**
   * @remarks
   * The UUID.
   * 
   * @example
   * b91035dc-8be4-411d-bec5-e6320af9****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      assetName: 'AssetName',
      assetPrivateIp: 'AssetPrivateIp',
      assetType: 'AssetType',
      categoryClassId: 'CategoryClassId',
      categoryName: 'CategoryName',
      cityId: 'CityId',
      countryId: 'CountryId',
      dstIp: 'DstIp',
      dstPortList: 'DstPortList',
      eventCnt: 'EventCnt',
      eventLevel: 'EventLevel',
      eventName: 'EventName',
      firstTime: 'FirstTime',
      lastTime: 'LastTime',
      locationName: 'LocationName',
      payload: 'Payload',
      protoList: 'ProtoList',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceIdType: 'ResourceIdType',
      sensitiveDataCnt: 'SensitiveDataCnt',
      sensitiveDataList: 'SensitiveDataList',
      sensitiveLevel: 'SensitiveLevel',
      sensitiveType: 'SensitiveType',
      srcIp: 'SrcIp',
      srcPortList: 'SrcPortList',
      trafficBytes: 'TrafficBytes',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetName: 'string',
      assetPrivateIp: 'string',
      assetType: 'string',
      categoryClassId: 'string',
      categoryName: 'string',
      cityId: 'string',
      countryId: 'string',
      dstIp: 'string',
      dstPortList: 'string',
      eventCnt: 'number',
      eventLevel: 'string',
      eventName: 'string',
      firstTime: 'number',
      lastTime: 'number',
      locationName: 'string',
      payload: 'string',
      protoList: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceIdType: 'number',
      sensitiveDataCnt: 'number',
      sensitiveDataList: { 'type': 'array', 'itemType': 'string' },
      sensitiveLevel: 'string',
      sensitiveType: 'string',
      srcIp: 'string',
      srcPortList: 'string',
      trafficBytes: 'number',
      uuid: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.sensitiveDataList)) {
      $dara.Model.validateArray(this.sensitiveDataList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSdlEventListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F06DE24D-6EB9-5F55-B588-7BB946DF****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of data leak events.
   */
  sdlEventDetailList?: DescribeSdlEventListResponseBodySdlEventDetailList[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sdlEventDetailList: 'SdlEventDetailList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sdlEventDetailList: { 'type': 'array', 'itemType': DescribeSdlEventListResponseBodySdlEventDetailList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sdlEventDetailList)) {
      $dara.Model.validateArray(this.sdlEventDetailList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

