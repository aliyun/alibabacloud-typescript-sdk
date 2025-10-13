// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCoordinationTicketResponseBodyCoordinateTicketModel extends $dara.Model {
  /**
   * @example
   * co-dk5xrhqlizm42****
   */
  coId?: string;
  /**
   * @example
   * W0Rlc2t0b3BdDQpHV1Rva2VuPTAwT1A1bHp1RUlEdU00T0IzemdiZ****
   */
  coordinateTicket?: string;
  /**
   * @example
   * eab51156-7832-4922-9623-ff905****
   */
  taskId?: string;
  /**
   * @example
   * Finished
   */
  taskStatus?: string;
  static names(): { [key: string]: string } {
    return {
      coId: 'CoId',
      coordinateTicket: 'CoordinateTicket',
      taskId: 'TaskId',
      taskStatus: 'TaskStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coId: 'string',
      coordinateTicket: 'string',
      taskId: 'string',
      taskStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCoordinationTicketResponseBody extends $dara.Model {
  coordinateTicketModel?: GetCoordinationTicketResponseBodyCoordinateTicketModel;
  /**
   * @example
   * AD2D0761-1FE5-549D-B169******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      coordinateTicketModel: 'CoordinateTicketModel',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coordinateTicketModel: GetCoordinationTicketResponseBodyCoordinateTicketModel,
      requestId: 'string',
    };
  }

  validate() {
    if(this.coordinateTicketModel && typeof (this.coordinateTicketModel as any).validate === 'function') {
      (this.coordinateTicketModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

