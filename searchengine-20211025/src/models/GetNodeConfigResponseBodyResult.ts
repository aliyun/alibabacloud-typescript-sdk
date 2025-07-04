// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNodeConfigResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the index is effective online.
   * 
   * @example
   * 1
   */
  active?: boolean;
  /**
   * @remarks
   * The number of data replicas.
   * 
   * @example
   * 2
   */
  dataDuplicateNumber?: number;
  /**
   * @remarks
   * The number of data shards.
   * 
   * @example
   * 2
   */
  dataFragmentNumber?: number;
  /**
   * @remarks
   * The traffic percentage.
   * 
   * @example
   * 0
   */
  flowRatio?: number;
  /**
   * @remarks
   * The minimum service ratio.
   * 
   * @example
   * 100
   */
  minServicePercent?: number;
  /**
   * @remarks
   * Indicates whether the cluster is mounted.
   * 
   * @example
   * true
   */
  published?: boolean;
  static names(): { [key: string]: string } {
    return {
      active: 'active',
      dataDuplicateNumber: 'dataDuplicateNumber',
      dataFragmentNumber: 'dataFragmentNumber',
      flowRatio: 'flowRatio',
      minServicePercent: 'minServicePercent',
      published: 'published',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'boolean',
      dataDuplicateNumber: 'number',
      dataFragmentNumber: 'number',
      flowRatio: 'number',
      minServicePercent: 'number',
      published: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

