// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvoiceSearchResponseBodyModule extends $dara.Model {
  /**
   * @remarks
   * ID
   * 
   * @example
   * 1478652
   */
  id?: number;
  /**
   * @example
   * 405009
   */
  thirdPartInvoiceId?: string;
  title?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      thirdPartInvoiceId: 'third_part_invoice_id',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      thirdPartInvoiceId: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class InvoiceSearchResponseBody extends $dara.Model {
  /**
   * @example
   * SUCCESS
   */
  code?: string;
  message?: string;
  module?: InvoiceSearchResponseBodyModule[];
  /**
   * @example
   * 407543AF-2BD9-5890-BD92-9D1AB7218B27
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * EB68C364-F9A0-5046-910A-2DD92C277E71
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      message: 'message',
      module: 'module',
      requestId: 'requestId',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      module: { 'type': 'array', 'itemType': InvoiceSearchResponseBodyModule },
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.module)) {
      $dara.Model.validateArray(this.module);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

