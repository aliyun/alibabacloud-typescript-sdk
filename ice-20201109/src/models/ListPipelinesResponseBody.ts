// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPipelinesResponseBodyPipelineList } from "./ListPipelinesResponseBodyPipelineList";


export class ListPipelinesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried MPS queues.
   */
  pipelineList?: ListPipelinesResponseBodyPipelineList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pipelineList: 'PipelineList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pipelineList: { 'type': 'array', 'itemType': ListPipelinesResponseBodyPipelineList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.pipelineList)) {
      $dara.Model.validateArray(this.pipelineList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

