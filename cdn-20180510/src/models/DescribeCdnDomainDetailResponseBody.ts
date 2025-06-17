// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnDomainDetailResponseBodyGetDomainDetailModel } from "./DescribeCdnDomainDetailResponseBodyGetDomainDetailModel";


export class DescribeCdnDomainDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the accelerated domain name.
   */
  getDomainDetailModel?: DescribeCdnDomainDetailResponseBodyGetDomainDetailModel;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 18CF38AA-1275-451D-A12B-4EC0BF1C5E30
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      getDomainDetailModel: 'GetDomainDetailModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      getDomainDetailModel: DescribeCdnDomainDetailResponseBodyGetDomainDetailModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.getDomainDetailModel && typeof (this.getDomainDetailModel as any).validate === 'function') {
      (this.getDomainDetailModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

