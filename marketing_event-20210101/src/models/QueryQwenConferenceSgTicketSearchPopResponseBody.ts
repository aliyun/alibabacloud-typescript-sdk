// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryQwenConferenceSgTicketSearchPopResponseBodyData extends $dara.Model {
  companyName?: string;
  extFields?: string;
  firstName?: string;
  lastName?: string;
  submitId?: number;
  ticketToken?: string;
  static names(): { [key: string]: string } {
    return {
      companyName: 'CompanyName',
      extFields: 'ExtFields',
      firstName: 'FirstName',
      lastName: 'LastName',
      submitId: 'SubmitId',
      ticketToken: 'TicketToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      companyName: 'string',
      extFields: 'string',
      firstName: 'string',
      lastName: 'string',
      submitId: 'number',
      ticketToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryQwenConferenceSgTicketSearchPopResponseBody extends $dara.Model {
  code?: string;
  data?: QueryQwenConferenceSgTicketSearchPopResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': QueryQwenConferenceSgTicketSearchPopResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

