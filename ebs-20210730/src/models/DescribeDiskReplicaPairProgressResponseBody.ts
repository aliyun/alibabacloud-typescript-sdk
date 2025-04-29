// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiskReplicaPairProgressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The replication progress of the replication pair.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The timestamp that indicates the last recovery point in time. The value is returned only after the replication pair works for replicating data.
   * 
   * @example
   * 1661917424
   */
  recoverPoint?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAA478A0-BEE6-1D42-BEB6-A9CFEAD6****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      progress: 'Progress',
      recoverPoint: 'RecoverPoint',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      progress: 'number',
      recoverPoint: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

