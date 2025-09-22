// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateTicketRecordByticketCodePopRequest extends $dara.Model {
  /**
   * @example
   * 3402
   */
  agendaId?: string;
  /**
   * @example
   * 4546-100000
   */
  code?: string;
  /**
   * @example
   * boarding
   */
  event?: string;
  /**
   * @example
   * 12345
   */
  sceneId?: string;
  /**
   * @example
   * 2024-09-25 14:11
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      agendaId: 'AgendaId',
      code: 'Code',
      event: 'Event',
      sceneId: 'SceneId',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agendaId: 'string',
      code: 'string',
      event: 'string',
      sceneId: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

