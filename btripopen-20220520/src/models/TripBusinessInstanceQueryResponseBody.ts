// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TripBusinessInstanceQueryResponseBodyModule extends $dara.Model {
  businessData?: string;
  businessFormData?: string;
  creator?: string;
  gmtCreate?: number;
  gmtModified?: number;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      businessData: 'business_data',
      businessFormData: 'business_form_data',
      creator: 'creator',
      gmtCreate: 'gmt_create',
      gmtModified: 'gmt_modified',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessData: 'string',
      businessFormData: 'string',
      creator: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TripBusinessInstanceQueryResponseBody extends $dara.Model {
  code?: string;
  message?: string;
  module?: TripBusinessInstanceQueryResponseBodyModule;
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
      module: TripBusinessInstanceQueryResponseBodyModule,
      requestId: 'string',
      success: 'boolean',
      traceId: 'string',
    };
  }

  validate() {
    if(this.module && typeof (this.module as any).validate === 'function') {
      (this.module as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

