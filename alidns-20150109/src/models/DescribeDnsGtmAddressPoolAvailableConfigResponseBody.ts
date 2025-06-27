// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDnsGtmAddressPoolAvailableConfigResponseBodyAttributeInfos } from "./DescribeDnsGtmAddressPoolAvailableConfigResponseBodyAttributeInfos";


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

