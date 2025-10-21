// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AsyncResourcePlanOperationResult extends $dara.Model {
  /**
   * @example
   * ""
   */
  message?: string;
  /**
   * @example
   * {\"ssgProfiles\":[{\"name\":\"default\",\"cpu\":1.13,\"heap\":\"1 gb\",\"offHeap\":\"32 mb\",\"managed\":{},\"extended\":{}}],\"nodes\":[{\"id\":1,\"type\":\"StreamExecTableSourceScan\",\"desc\":\"Source: datagen_source[78]\",\"profile\":{\"group\":\"default\",\"parallelism\":1,\"maxParallelism\":32768,\"minParallelism\":1}},{\"id\":2,\"type\":\"StreamExecSink\",\"desc\":\"Sink: blackhole_sink[79]\",\"profile\":{\"group\":\"default\",\"parallelism\":1,\"maxParallelism\":32768,\"minParallelism\":1}}],\"edges\":[{\"source\":1,\"target\":2,\"mode\":\"PIPELINED\",\"strategy\":\"FORWARD\"}],\"vertices\":{\"717c7b8afebbfb7137f6f0f99beb2a94\":[1,2]}}
   */
  plan?: string;
  /**
   * @example
   * FINISHED
   */
  ticketStatus?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      plan: 'plan',
      ticketStatus: 'ticketStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      plan: 'string',
      ticketStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

