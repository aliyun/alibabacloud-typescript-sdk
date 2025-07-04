// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResultClusterValue extends $dara.Model {
  /**
   * @remarks
   * The maximum number of full indexes that can be concurrently built.
   * 
   * @example
   * 2
   */
  buildParallelNum?: number;
  /**
   * @remarks
   * The maximum number of full indexes that can be concurrently merged.
   * 
   * @example
   * 2
   */
  mergeParallelNum?: number;
  static names(): { [key: string]: string } {
    return {
      buildParallelNum: 'buildParallelNum',
      mergeParallelNum: 'mergeParallelNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildParallelNum: 'number',
      mergeParallelNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

