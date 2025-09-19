// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDiscoverDatabaseRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the scan task.
   * 
   * > You can call the [StartDiscoverDatabaseTask](~~StartDiscoverDatabaseTask~~) operation to query the ID of the task.
   * 
   * @example
   * 7f7b051f-7d1c-46da-b253-a03f3a27****
   */
  createMark?: string;
  static names(): { [key: string]: string } {
    return {
      createMark: 'CreateMark',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createMark: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

