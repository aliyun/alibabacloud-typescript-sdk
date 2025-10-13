// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCoordinationTicketRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * co-ik1nu2hxg5zbu****
   */
  coId?: string;
  /**
   * @example
   * eab51156-7832-4922-9623-ff905****
   */
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      coId: 'CoId',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

