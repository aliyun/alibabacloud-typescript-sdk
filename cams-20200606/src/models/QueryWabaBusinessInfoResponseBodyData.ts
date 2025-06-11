// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryWabaBusinessInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Business Manager ID.
   * 
   * @example
   * 192882828733
   */
  businessId?: string;
  /**
   * @remarks
   * The Business Manager name.
   * 
   * @example
   * Alibaba
   */
  businessName?: string;
  /**
   * @remarks
   * The verification status.
   * 
   * @example
   * verified
   */
  verificationStatus?: string;
  /**
   * @remarks
   * The industry.
   * 
   * @example
   * Retail
   * 
   * @deprecated
   */
  vertical?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      businessName: 'BusinessName',
      verificationStatus: 'VerificationStatus',
      vertical: 'Vertical',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'string',
      businessName: 'string',
      verificationStatus: 'string',
      vertical: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

