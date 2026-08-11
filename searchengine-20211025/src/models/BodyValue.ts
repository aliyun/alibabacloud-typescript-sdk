// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BodyValue extends $dara.Model {
  /**
   * @remarks
   * Pauses all deployments.
   * 
   * @example
   * true
   */
  pauseAll?: boolean;
  /**
   * @remarks
   * Pauses the deployment of new full index versions.
   * 
   * @example
   * true
   */
  pauseIndex?: boolean;
  /**
   * @remarks
   * Pauses the deployment of incremental batches.
   * 
   * @example
   * true
   */
  pauseIndexBatch?: boolean;
  /**
   * @remarks
   * Pauses configuration deployments.
   * 
   * @example
   * true
   */
  pauseBiz?: boolean;
  /**
   * @remarks
   * Pauses real-time incremental updates.
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

