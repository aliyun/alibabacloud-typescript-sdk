// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecognizeTrainTicketResponseBodyData extends $dara.Model {
  date?: string;
  departureStation?: string;
  destination?: string;
  level?: string;
  name?: string;
  /**
   * @example
   * G7350
   */
  number?: string;
  /**
   * @example
   * 104.5
   */
  price?: number;
  seat?: string;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      departureStation: 'DepartureStation',
      destination: 'Destination',
      level: 'Level',
      name: 'Name',
      number: 'Number',
      price: 'Price',
      seat: 'Seat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      departureStation: 'string',
      destination: 'string',
      level: 'string',
      name: 'string',
      number: 'string',
      price: 'number',
      seat: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class RecognizeTrainTicketResponseBody extends $dara.Model {
  data?: RecognizeTrainTicketResponseBodyData;
  /**
   * @example
   * BE4B73EA-30A0-4573-A548-3A101B34641A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: RecognizeTrainTicketResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

