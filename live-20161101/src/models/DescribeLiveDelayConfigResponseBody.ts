// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDelayConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * liveApp****
   */
  app?: string;
  /**
   * @remarks
   * The playback latency of the stream.
   * 
   * @example
   * 60
   */
  delayTime?: string;
  /**
   * @remarks
   * The streaming domain.
   * 
   * @example
   * example.com
   */
  domain?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A3136B58-5876-4168-83CA-B562781981A0
   */
  requestId?: string;
  /**
   * @remarks
   * The stream name.
   * 
   * @example
   * liveStream****
   */
  stream?: string;
  /**
   * @remarks
   * The trigger mode for the task. Valid values:
   * 
   * - **PUBLISH_ONLY**: The task is triggered only when stream ingest parameters for delayed playback are specified.
   * - **CONFIG_ONLY**: The task is triggered only by the configuration. Stream ingest parameters are ignored.
   * - **PUBLISH_CONFIG**: The task can be triggered by both stream ingest parameters and the configuration. Stream ingest parameters have a higher priority than the configuration.
   * 
   * @example
   * PUBLISH_ONLY
   */
  taskTriggerMode?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      delayTime: 'DelayTime',
      domain: 'Domain',
      requestId: 'RequestId',
      stream: 'Stream',
      taskTriggerMode: 'TaskTriggerMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      delayTime: 'string',
      domain: 'string',
      requestId: 'string',
      stream: 'string',
      taskTriggerMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

