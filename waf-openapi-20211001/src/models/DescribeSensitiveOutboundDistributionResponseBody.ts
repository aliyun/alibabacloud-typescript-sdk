// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSensitiveOutboundDistributionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The destination country.
   * 
   * @example
   * US
   */
  country?: string;
  /**
   * @remarks
   * The number of outbound personal information entries.
   * 
   * @example
   * 213
   */
  infoOutboundCount?: number;
  /**
   * @remarks
   * The number of outbound sensitive information entries.
   * 
   * @example
   * 144
   */
  sensitiveOutboundCount?: number;
  static names(): { [key: string]: string } {
    return {
      country: 'Country',
      infoOutboundCount: 'InfoOutboundCount',
      sensitiveOutboundCount: 'SensitiveOutboundCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      country: 'string',
      infoOutboundCount: 'number',
      sensitiveOutboundCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSensitiveOutboundDistributionResponseBody extends $dara.Model {
  /**
   * @remarks
   * A list of outbound traffic distributions that contain personal information.
   */
  data?: DescribeSensitiveOutboundDistributionResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeSensitiveOutboundDistributionResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

