// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RLProgressSlowDetail } from "./RlprogressSlowDetail";


export class RLProgressSlow extends $dara.Model {
  /**
   * @remarks
   * 慢推理明细，最多 20 条
   * 
   * @example
   * [{"Elapsed":42.5,"Time":1787474487,"Message":"rollout generation slow","Rank":0,"Pod":"dlc193cpaitk8eny-master-0","WorkerPid":12345,"Ip":"192.168.0.12","Rid":"req-8f3a2c1d","TokenizerPid":"12360","Ipc":"ipc://worker-0","IsPause":"false","StatePresent":"true","OutQueue":"3"}]
   */
  details?: RLProgressSlowDetail[];
  /**
   * @remarks
   * 最慢一条的已耗时（秒）
   * 
   * @example
   * 42.5
   */
  elapsed?: number;
  /**
   * @remarks
   * 最慢一条的日志时间（unix 秒）
   * 
   * @example
   * 1787474487
   */
  time?: number;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      elapsed: 'Elapsed',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': RLProgressSlowDetail },
      elapsed: 'number',
      time: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

