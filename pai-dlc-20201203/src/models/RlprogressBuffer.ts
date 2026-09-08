// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RLProgressBufferDetail } from "./RlprogressBufferDetail";


export class RLProgressBuffer extends $dara.Model {
  /**
   * @remarks
   * The total number of consumed samples in incomplete buffers.
   * 
   * @example
   * 0
   */
  consumed?: number;
  /**
   * @remarks
   * The buffer details split by tag.
   * 
   * @example
   * [{"Tag":1,"Ready":500,"Consumed":0,"Finished":500,"Total":512}]
   */
  detail?: RLProgressBufferDetail[];
  /**
   * @remarks
   * The estimated number of remaining seconds to fill the buffer.
   * 
   * @example
   * 0
   */
  etaSec?: number;
  /**
   * @remarks
   * The fill rate in entries per minute, estimated by using the rollout completion rate as a proxy.
   * 
   * @example
   * 120.5
   */
  fillRatePerMin?: number;
  /**
   * @remarks
   * The total number of finished samples in incomplete buffers.
   * 
   * @example
   * 500
   */
  finished?: number;
  /**
   * @remarks
   * The readiness percentage, which is the ratio of Ready to Target.
   * 
   * @example
   * 100
   */
  pct?: number;
  /**
   * @remarks
   * The total number of ready samples in incomplete buffers.
   * 
   * @example
   * 500
   */
  ready?: number;
  /**
   * @remarks
   * The total number of target samples in incomplete buffers.
   * 
   * @example
   * 512
   */
  target?: number;
  /**
   * @remarks
   * The configured training batch size.
   * 
   * @example
   * 512
   */
  trainBatchSize?: number;
  /**
   * @remarks
   * Indicates whether Consumed is greater than 0, which means the batch has been fetched and the trainer is updating.
   * 
   * @example
   * true
   */
  training?: boolean;
  static names(): { [key: string]: string } {
    return {
      consumed: 'Consumed',
      detail: 'Detail',
      etaSec: 'EtaSec',
      fillRatePerMin: 'FillRatePerMin',
      finished: 'Finished',
      pct: 'Pct',
      ready: 'Ready',
      target: 'Target',
      trainBatchSize: 'TrainBatchSize',
      training: 'Training',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consumed: 'number',
      detail: { 'type': 'array', 'itemType': RLProgressBufferDetail },
      etaSec: 'number',
      fillRatePerMin: 'number',
      finished: 'number',
      pct: 'number',
      ready: 'number',
      target: 'number',
      trainBatchSize: 'number',
      training: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.detail)) {
      $dara.Model.validateArray(this.detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

