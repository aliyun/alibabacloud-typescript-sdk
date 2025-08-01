// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BodyValue extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to suspend all pushes.
   * 
   * @example
   * true
   */
  pauseAll?: boolean;
  /**
   * @remarks
   * Specifies whether to suspend the push for the new full index version.
   * 
   * @example
   * true
   */
  pauseIndex?: boolean;
  /**
   * @remarks
   * Specifies whether to suspend the push for the incremental indexes.
   * 
   * @example
   * true
   */
  pauseIndexBatch?: boolean;
  /**
   * @remarks
   * Specifies whether to suspend the push for the configuration.
   * 
   * @example
   * true
   */
  pauseBiz?: boolean;
  /**
   * @remarks
   * Specifies whether to suspend the push for the real-time incremental indexes.
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

