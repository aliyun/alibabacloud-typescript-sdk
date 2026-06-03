// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLoginTicketResponseBodyLoginTicketZones extends $dara.Model {
  localName?: string;
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      localName: 'LocalName',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      localName: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoginTicketResponseBodyLoginTicket extends $dara.Model {
  certificate?: string;
  ticket?: string;
  zones?: DescribeLoginTicketResponseBodyLoginTicketZones[];
  static names(): { [key: string]: string } {
    return {
      certificate: 'Certificate',
      ticket: 'Ticket',
      zones: 'Zones',
    };
  }

  static types(): { [key: string]: any } {
    return {
      certificate: 'string',
      ticket: 'string',
      zones: { 'type': 'array', 'itemType': DescribeLoginTicketResponseBodyLoginTicketZones },
    };
  }

  validate() {
    if(Array.isArray(this.zones)) {
      $dara.Model.validateArray(this.zones);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLoginTicketResponseBody extends $dara.Model {
  loginTicket?: DescribeLoginTicketResponseBodyLoginTicket;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      loginTicket: 'LoginTicket',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loginTicket: DescribeLoginTicketResponseBodyLoginTicket,
      requestId: 'string',
    };
  }

  validate() {
    if(this.loginTicket && typeof (this.loginTicket as any).validate === 'function') {
      (this.loginTicket as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

