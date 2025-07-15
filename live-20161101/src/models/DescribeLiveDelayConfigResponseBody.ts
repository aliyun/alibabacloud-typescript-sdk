// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDelayConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the application to which the live stream belongs.
   * 
   * @example
   * liveApp****
   */
  app?: string;
  /**
   * @remarks
   * The duration for which the playback of the live stream is delayed.
   * 
   * @example
   * 60
   */
  delayTime?: string;
  /**
   * @remarks
   * The main streaming domain.
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
   * The name of the live stream.
   * 
   * @example
   * liveStream****
   */
  stream?: string;
  /**
   * @remarks
   * The trigger mode. Valid values:
   * 
   * *   **PUBLISH_ONLY**: Stream delay can be triggered only by specifying the stream delay parameter in the ingest URL.
   * *   **CONFIG_ONLY**: Stream delay can be triggered only by the stream delay configuration.
   * *   **PUBLISH_CONFIG**: Stream delay can be triggered by the stream delay parameter in the ingest URL or the stream delay configuration. The stream delay parameter takes precedence over the stream delay configuration.
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

