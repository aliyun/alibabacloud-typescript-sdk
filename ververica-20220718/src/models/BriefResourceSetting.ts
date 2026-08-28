// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchResourceSetting } from "./BatchResourceSetting";
import { StreamingResourceSetting } from "./StreamingResourceSetting";


export class BriefResourceSetting extends $dara.Model {
  /**
   * @remarks
   * The resource settings for running in batch mode. This parameter is required when batch mode is selected.
   */
  batchResourceSetting?: BatchResourceSetting;
  /**
   * @remarks
   * The Flink configuration.
   * 
   * @example
   * “execution.checkpointing.interval: 180s”
   */
  flinkConf?: { [key: string]: any };
  /**
   * @remarks
   * The resource settings for running in streaming mode. This parameter is required when streaming mode is selected.
   */
  streamingResourceSetting?: StreamingResourceSetting;
  static names(): { [key: string]: string } {
    return {
      batchResourceSetting: 'batchResourceSetting',
      flinkConf: 'flinkConf',
      streamingResourceSetting: 'streamingResourceSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchResourceSetting: BatchResourceSetting,
      flinkConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      streamingResourceSetting: StreamingResourceSetting,
    };
  }

  validate() {
    if(this.batchResourceSetting && typeof (this.batchResourceSetting as any).validate === 'function') {
      (this.batchResourceSetting as any).validate();
    }
    if(this.flinkConf) {
      $dara.Model.validateMap(this.flinkConf);
    }
    if(this.streamingResourceSetting && typeof (this.streamingResourceSetting as any).validate === 'function') {
      (this.streamingResourceSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

