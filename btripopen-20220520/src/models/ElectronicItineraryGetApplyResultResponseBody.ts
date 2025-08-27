// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ElectronicItineraryGetApplyResultResponseBodyModuleApplyTicketList extends $dara.Model {
  /**
   * @example
   * 5001
   */
  failedCode?: number;
  failedReason?: string;
  itineraryStatus?: number;
  remark?: string;
  /**
   * @example
   * 781-6605285563
   */
  ticketNo?: string;
  static names(): { [key: string]: string } {
    return {
      failedCode: 'failed_code',
      failedReason: 'failed_reason',
      itineraryStatus: 'itinerary_status',
      remark: 'remark',
      ticketNo: 'ticket_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCode: 'number',
      failedReason: 'string',
      itineraryStatus: 'number',
      remark: 'string',
      ticketNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElectronicItineraryGetApplyResultResponseBodyModule extends $dara.Model {
  applyTicketList?: ElectronicItineraryGetApplyResultResponseBodyModuleApplyTicketList[];
  batchApplyNo?: string;
  static names(): { [key: string]: string } {
    return {
      applyTicketList: 'apply_ticket_list',
      batchApplyNo: 'batch_apply_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyTicketList: { 'type': 'array', 'itemType': ElectronicItineraryGetApplyResultResponseBodyModuleApplyTicketList },
      batchApplyNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applyTicketList)) {
      $dara.Model.validateArray(this.applyTicketList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElectronicItineraryGetApplyResultResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: number;
  message?: string;
  module?: ElectronicItineraryGetApplyResultResponseBodyModule;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * B72B39C8-32DE-558D-AD1C-D53F11F6ADFE
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
   * 21041ce316577904808056433edbb2
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
      code: 'number',
      message: 'string',
      module: ElectronicItineraryGetApplyResultResponseBodyModule,
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

