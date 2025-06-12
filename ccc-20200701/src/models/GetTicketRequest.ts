// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTicketRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3d26b90a-c5d2-4b09-8219-********
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

