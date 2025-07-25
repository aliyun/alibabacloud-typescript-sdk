// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmAddressPoolAvailableConfigResponseBodyAttributeInfosAttributeInfo extends $dara.Model {
  /**
   * @remarks
   * The parent line code of the source region.
   * 
   * @example
   * telecom
   */
  fatherCode?: string;
  /**
   * @remarks
   * The code of the source region group.
   * 
   * @example
   * default
   */
  groupCode?: string;
  /**
   * @remarks
   * The name of the request source group.
   * 
   * @example
   * global
   */
  groupName?: string;
  /**
   * @remarks
   * The line code of the source region.
   * 
   * @example
   * default
   */
  lineCode?: string;
  /**
   * @remarks
   * The line name of the source region.
   * 
   * @example
   * global
   */
  lineName?: string;
  static names(): { [key: string]: string } {
    return {
      fatherCode: 'FatherCode',
      groupCode: 'GroupCode',
      groupName: 'GroupName',
      lineCode: 'LineCode',
      lineName: 'LineName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fatherCode: 'string',
      groupCode: 'string',
      groupName: 'string',
      lineCode: 'string',
      lineName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAddressPoolAvailableConfigResponseBodyAttributeInfos extends $dara.Model {
  attributeInfo?: DescribeDnsGtmAddressPoolAvailableConfigResponseBodyAttributeInfosAttributeInfo[];
  static names(): { [key: string]: string } {
    return {
      attributeInfo: 'AttributeInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeInfo: { 'type': 'array', 'itemType': DescribeDnsGtmAddressPoolAvailableConfigResponseBodyAttributeInfosAttributeInfo },
    };
  }

  validate() {
    if(Array.isArray(this.attributeInfo)) {
      $dara.Model.validateArray(this.attributeInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDnsGtmAddressPoolAvailableConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The supported source regions.
   */
  attributeInfos?: DescribeDnsGtmAddressPoolAvailableConfigResponseBodyAttributeInfos;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 199C3699-9A7B-41A1-BB5A-F1E862D3CB38
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      attributeInfos: 'AttributeInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributeInfos: DescribeDnsGtmAddressPoolAvailableConfigResponseBodyAttributeInfos,
      requestId: 'string',
    };
  }

  validate() {
    if(this.attributeInfos && typeof (this.attributeInfos as any).validate === 'function') {
      (this.attributeInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

