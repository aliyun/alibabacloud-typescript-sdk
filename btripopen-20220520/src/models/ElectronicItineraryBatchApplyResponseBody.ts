// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ElectronicItineraryBatchApplyResponseBodyModuleApplyFailedTicketList extends $dara.Model {
  failedCode?: number;
  failedReason?: string;
  ticketNo?: string;
  static names(): { [key: string]: string } {
    return {
      failedCode: 'failed_code',
      failedReason: 'failed_reason',
      ticketNo: 'ticket_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failedCode: 'number',
      failedReason: 'string',
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

export class ElectronicItineraryBatchApplyResponseBodyModule extends $dara.Model {
  applyFailedTicketList?: ElectronicItineraryBatchApplyResponseBodyModuleApplyFailedTicketList[];
  batchNo?: string;
  static names(): { [key: string]: string } {
    return {
      applyFailedTicketList: 'apply_failed_ticket_list',
      batchNo: 'batch_no',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyFailedTicketList: { 'type': 'array', 'itemType': ElectronicItineraryBatchApplyResponseBodyModuleApplyFailedTicketList },
      batchNo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.applyFailedTicketList)) {
      $dara.Model.validateArray(this.applyFailedTicketList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ElectronicItineraryBatchApplyResponseBody extends $dara.Model {
  code?: number;
  message?: string;
  module?: ElectronicItineraryBatchApplyResponseBodyModule;
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
      code: 'number',
      message: 'string',
      module: ElectronicItineraryBatchApplyResponseBodyModule,
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

