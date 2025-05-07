// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeReadDBInstanceDelayResponseBodyItemsItemsReadonlyInstanceDelayReadonlyInstanceDelay extends $dara.Model {
  /**
   * @remarks
   * The duration that is allowed for the latency in the persistence of WAL data. Unit: seconds.
   * 
   * @example
   * 0
   */
  flushLag?: string;
  /**
   * @remarks
   * The data size that is allowed for the latency in the persistence of WAL data. Unit: MB.
   * 
   * @example
   * 0
   */
  flushLatency?: string;
  /**
   * @remarks
   * The read-only instance ID.
   * 
   * @example
   * rr-bp*****
   */
  readDBInstanceName?: string;
  /**
   * @remarks
   * The duration that is allowed for the latency in the playback of WAL data. Unit: seconds.
   * 
   * @example
   * 0
   */
  replayLag?: string;
  /**
   * @remarks
   * The data size that is allowed for the latency in the playback of WAL data. Unit: MB.
   * 
   * @example
   * 0
   */
  replayLatency?: string;
  /**
   * @remarks
   * The data size that is allowed for the latency in the sending of WAL data. Unit: MB.
   * 
   * @example
   * 0
   */
  sendLatency?: string;
  /**
   * @remarks
   * The duration that is allowed for the latency in the write-back of WAL data. Unit: seconds.
   * 
   * @example
   * 0
   */
  writeLag?: string;
  /**
   * @remarks
   * The data size that is allowed for the latency in the write-back of WAL data. Unit: MB.
   * 
   * @example
   * 0
   */
  writeLatency?: string;
  static names(): { [key: string]: string } {
    return {
      flushLag: 'FlushLag',
      flushLatency: 'FlushLatency',
      readDBInstanceName: 'ReadDBInstanceName',
      replayLag: 'ReplayLag',
      replayLatency: 'ReplayLatency',
      sendLatency: 'SendLatency',
      writeLag: 'WriteLag',
      writeLatency: 'WriteLatency',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flushLag: 'string',
      flushLatency: 'string',
      readDBInstanceName: 'string',
      replayLag: 'string',
      replayLatency: 'string',
      sendLatency: 'string',
      writeLag: 'string',
      writeLatency: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

