// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvoiceSearchResponseBodyModule extends $dara.Model {
  id?: number;
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
  code?: string;
  message?: string;
  module?: InvoiceSearchResponseBodyModule[];
  requestId?: string;
  success?: boolean;
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

