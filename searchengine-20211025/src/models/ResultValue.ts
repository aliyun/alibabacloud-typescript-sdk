// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResultValue extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to pause deployments to all destinations.
   * 
   * @example
   * true
   */
  pauseAll?: boolean;
  /**
   * @remarks
   * Specifies whether to pause deployments of new full indexes.
   * 
   * @example
   * true
   */
  pauseIndex?: boolean;
  /**
   * @remarks
   * Specifies whether to pause deployments of incremental batches.
   * 
   * @example
   * true
   */
  pauseIndexBatch?: boolean;
  /**
   * @remarks
   * Specifies whether to pause configuration deployments.
   * 
   * @example
   * true
   */
  pauseBiz?: boolean;
  /**
   * @remarks
   * Specifies whether to pause real-time incremental updates.
   * 
   * @example
   * true
   */
  pauseRuntime?: boolean;
  static names(): { [key: string]: string } {
    return {
      pauseAll: 'pauseAll',
      pauseIndex: 'pauseIndex',
      pauseIndexBatch: 'pauseIndexBatch',
      pauseBiz: 'pauseBiz',
      pauseRuntime: 'pauseRuntime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pauseAll: 'boolean',
      pauseIndex: 'boolean',
      pauseIndexBatch: 'boolean',
      pauseBiz: 'boolean',
      pauseRuntime: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

