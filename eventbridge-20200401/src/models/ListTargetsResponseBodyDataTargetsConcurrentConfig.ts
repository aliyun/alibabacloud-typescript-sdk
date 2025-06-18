// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTargetsResponseBodyDataTargetsConcurrentConfig extends $dara.Model {
  /**
   * @remarks
   * The maximum number of concurrent events allowed in the event target.
   * 
   * @example
   * 10
   */
  concurrency?: number;
  static names(): { [key: string]: string } {
    return {
      concurrency: 'Concurrency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concurrency: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

