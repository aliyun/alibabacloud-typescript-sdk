// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaLiveInputsResponseBodyInputsInputInfos extends $dara.Model {
  /**
   * @remarks
   * The endpoint that the stream is pushed to. This parameter is returned for PUSH inputs.
   * 
   * @example
   * rtmp://domain/app/stream
   */
  destHost?: string;
  /**
   * @remarks
   * The ID of the flow from MediaConnect.
   * 
   * @example
   * ******81-9693-40dc-bbab-db5e49******
   */
  flowId?: string;
  /**
   * @remarks
   * The output name of the MediaConnect flow.
   * 
   * @example
   * myFlowOutputName
   */
  flowOutputName?: string;
  /**
   * @remarks
   * The URL for input monitoring.
   * 
   * @example
   * rtmp://domain/app/stream_for_monitor
   */
  monitorUrl?: string;
  /**
   * @remarks
   * The source URL where the stream is pulled from. This parameter is returned for PULL inputs.
   * 
   * @example
   * rtmp://domain/app/stream
   */
  sourceUrl?: string;
  /**
   * @remarks
   * The name of the pushed stream. This parameter is returned for PUSH inputs.
   * 
   * @example
   * mystream
   */
  streamName?: string;
  static names(): { [key: string]: string } {
    return {
      destHost: 'DestHost',
      flowId: 'FlowId',
      flowOutputName: 'FlowOutputName',
      monitorUrl: 'MonitorUrl',
      sourceUrl: 'SourceUrl',
      streamName: 'StreamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destHost: 'string',
      flowId: 'string',
      flowOutputName: 'string',
      monitorUrl: 'string',
      sourceUrl: 'string',
      streamName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

