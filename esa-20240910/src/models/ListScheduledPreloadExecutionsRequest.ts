// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScheduledPreloadExecutionsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the scheduled preload task.
   * 
   * This parameter is required.
   * 
   * @example
   * 665d3af3621bccf3fe29e1a4
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

