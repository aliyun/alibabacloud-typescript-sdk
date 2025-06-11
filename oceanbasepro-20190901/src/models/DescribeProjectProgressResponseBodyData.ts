// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProjectProgressResponseBodyData extends $dara.Model {
  /**
   * @example
   * MEDIUM
   */
  alarmLevel?: string;
  /**
   * @example
   * PRE_CHECK
   */
  currentStep?: string;
  /**
   * @example
   * true
   */
  enableFullTransfer?: boolean;
  /**
   * @example
   * true
   */
  enableIncrSync?: boolean;
  /**
   * @example
   * true
   */
  enableReverseIncrTransfer?: boolean;
  /**
   * @example
   * true
   */
  enableStructTransfer?: boolean;
  /**
   * @example
   * 100
   */
  fullTransferProgress?: number;
  /**
   * @example
   * 1689248064
   */
  incrSyncCheckpoint?: number;
  /**
   * @example
   * np_fe****
   */
  projectId?: string;
  /**
   * @example
   * 1689248075
   */
  reverseIncrTransferCheckpoint?: number;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @example
   * 100
   */
  structTransferProgress?: number;
  static names(): { [key: string]: string } {
    return {
      alarmLevel: 'AlarmLevel',
      currentStep: 'CurrentStep',
      enableFullTransfer: 'EnableFullTransfer',
      enableIncrSync: 'EnableIncrSync',
      enableReverseIncrTransfer: 'EnableReverseIncrTransfer',
      enableStructTransfer: 'EnableStructTransfer',
      fullTransferProgress: 'FullTransferProgress',
      incrSyncCheckpoint: 'IncrSyncCheckpoint',
      projectId: 'ProjectId',
      reverseIncrTransferCheckpoint: 'ReverseIncrTransferCheckpoint',
      status: 'Status',
      structTransferProgress: 'StructTransferProgress',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmLevel: 'string',
      currentStep: 'string',
      enableFullTransfer: 'boolean',
      enableIncrSync: 'boolean',
      enableReverseIncrTransfer: 'boolean',
      enableStructTransfer: 'boolean',
      fullTransferProgress: 'number',
      incrSyncCheckpoint: 'number',
      projectId: 'string',
      reverseIncrTransferCheckpoint: 'number',
      status: 'string',
      structTransferProgress: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

