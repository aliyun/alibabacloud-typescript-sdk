// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DataImageRegionDistributeMapValue extends $dara.Model {
  /**
   * @remarks
   * The distribution status.
   * 
   * @example
   * AVAILABLE
   */
  distributeStatus?: string;
  /**
   * @remarks
   * The distribution progress.
   * 
   * @example
   * 100%
   */
  progress?: string;
  static names(): { [key: string]: string } {
    return {
      distributeStatus: 'DistributeStatus',
      progress: 'Progress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      distributeStatus: 'string',
      progress: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

