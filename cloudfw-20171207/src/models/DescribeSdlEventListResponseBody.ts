// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSdlEventListResponseBodySdlEventDetailList extends $dara.Model {
  /**
   * @example
   * test
   */
  assetName?: string;
  /**
   * @example
   * 47.100.102.XXX
   */
  assetPrivateIp?: string;
  /**
   * @example
   * EIP
   */
  assetType?: string;
  /**
   * @example
   * Trusted
   */
  categoryClassId?: string;
  /**
   * @example
   * Trusted
   */
  categoryName?: string;
  /**
   * @example
   * 000
   */
  cityId?: string;
  /**
   * @example
   * cn
   */
  countryId?: string;
  /**
   * @example
   * 106.14.74.XXX
   */
  dstIp?: string;
  /**
   * @example
   * 22
   */
  dstPortList?: string;
  /**
   * @example
   * 1
   */
  eventCnt?: number;
  /**
   * @example
   * high
   */
  eventLevel?: string;
  eventName?: string;
  /**
   * @example
   * 1735697768
   */
  firstTime?: number;
  /**
   * @example
   * 1738636157
   */
  lastTime?: number;
  locationName?: string;
  /**
   * @example
   * 3082002f02010004067075626c6963a082002002044c33a756020100020100308200103082000c06082b060102010105000500
   */
  payload?: string;
  /**
   * @example
   * TCP
   */
  protoList?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * ce347a98f41e849188aa51c56b02a****
   */
  resourceId?: string;
  /**
   * @example
   * 0
   */
  resourceIdType?: number;
  /**
   * @example
   * 10
   */
  sensitiveDataCnt?: number;
  sensitiveDataList?: string[];
  /**
   * @example
   * S3
   */
  sensitiveLevel?: string;
  sensitiveType?: string;
  /**
   * @example
   * 104.28.226.XX
   */
  srcIp?: string;
  /**
   * @example
   * 443
   */
  srcPortList?: string;
  /**
   * @example
   * 0
   */
  trafficBytes?: number;
  /**
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
   * @example
   * F06DE24D-6EB9-5F55-B588-7BB946DF****
   */
  requestId?: string;
  sdlEventDetailList?: DescribeSdlEventListResponseBodySdlEventDetailList[];
  /**
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

