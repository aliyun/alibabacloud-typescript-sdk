// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAggregateCompliancePackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The compliance package ID.
   * 
   * @example
   * cp-fc56626622af00f9****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CC0CE5EB-E51E-48EB-B4AB-9A9E131ECC0F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

