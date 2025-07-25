// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutTargetsRequestTargetsConcurrentConfig extends $dara.Model {
  /**
   * @remarks
   * The concurrency.
   * 
   * @example
   * 34
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

