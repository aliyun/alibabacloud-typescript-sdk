// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCompliancePackResponseBody extends $dara.Model {
  /**
   * @remarks
   * The compliance package ID.
   * 
   * @example
   * cp-a8a8626622af0082****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6EC7AED1-172F-42AE-9C12-295BC2ADB751
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

