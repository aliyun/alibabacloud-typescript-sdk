// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DraftValidationDetail } from "./DraftValidationDetail";


export class AsyncDraftValidateResult extends $dara.Model {
  draftValidationDetail?: DraftValidationDetail;
  message?: string;
  success?: boolean;
  ticketStatus?: string;
  static names(): { [key: string]: string } {
    return {
      draftValidationDetail: 'draftValidationDetail',
      message: 'message',
      success: 'success',
      ticketStatus: 'ticketStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      draftValidationDetail: DraftValidationDetail,
      message: 'string',
      success: 'boolean',
      ticketStatus: 'string',
    };
  }

  validate() {
    if(this.draftValidationDetail && typeof (this.draftValidationDetail as any).validate === 'function') {
      (this.draftValidationDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

