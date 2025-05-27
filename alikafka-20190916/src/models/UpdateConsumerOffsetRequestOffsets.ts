// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateConsumerOffsetRequestOffsets extends $dara.Model {
  /**
   * @remarks
   * The consumer offset of the partition.
   * 
   * @example
   * 1
   */
  offset?: number;
  /**
   * @remarks
   * The partition ID.
   * 
   * @example
   * 0
   */
  partition?: number;
  static names(): { [key: string]: string } {
    return {
      offset: 'Offset',
      partition: 'Partition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      offset: 'number',
      partition: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

