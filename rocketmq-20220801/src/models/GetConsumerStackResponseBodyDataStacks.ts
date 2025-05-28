// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConsumerStackResponseBodyDataStacks extends $dara.Model {
  /**
   * @remarks
   * Thread id.
   * 
   * @example
   * 123
   */
  thread?: string;
  /**
   * @remarks
   * Stack Information.
   */
  tracks?: string[];
  static names(): { [key: string]: string } {
    return {
      thread: 'thread',
      tracks: 'tracks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      thread: 'string',
      tracks: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.tracks)) {
      $dara.Model.validateArray(this.tracks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

