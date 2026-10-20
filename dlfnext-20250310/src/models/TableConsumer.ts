// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TableConsumer extends $dara.Model {
  /**
   * @remarks
   * Consumer ID
   * 
   * @example
   * paimon-table1-id
   */
  consumerId?: string;
  /**
   * @remarks
   * The last modified time of the consumer file in Unix milliseconds.
   * 
   * @example
   * 1791792221185
   */
  lastModifiedTime?: number;
  /**
   * @remarks
   * The ID of the next snapshot to be consumed.
   * 
   * @example
   * 123
   */
  nextSnapshot?: number;
  static names(): { [key: string]: string } {
    return {
      consumerId: 'consumerId',
      lastModifiedTime: 'lastModifiedTime',
      nextSnapshot: 'nextSnapshot',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumerId: 'string',
      lastModifiedTime: 'number',
      nextSnapshot: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

