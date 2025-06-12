// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTicketTasksRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 5491d3b4-14ee-4341-b5f1-db2c78beddeb
   */
  ticketId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      ticketId: 'TicketId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      ticketId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

