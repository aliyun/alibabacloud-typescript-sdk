// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryPipelineListResponseBodyNonExistPids } from "./QueryPipelineListResponseBodyNonExistPids";
import { QueryPipelineListResponseBodyPipelineList } from "./QueryPipelineListResponseBodyPipelineList";


export class QueryPipelineListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of MPS queues that do not exist.
   */
  nonExistPids?: QueryPipelineListResponseBodyNonExistPids;
  /**
   * @remarks
   * The MPS queues.
   */
  pipelineList?: QueryPipelineListResponseBodyPipelineList;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1C538EAA-ACAF-5AD8-B091-A72C63007149
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nonExistPids: 'NonExistPids',
      pipelineList: 'PipelineList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistPids: QueryPipelineListResponseBodyNonExistPids,
      pipelineList: QueryPipelineListResponseBodyPipelineList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.nonExistPids && typeof (this.nonExistPids as any).validate === 'function') {
      (this.nonExistPids as any).validate();
    }
    if(this.pipelineList && typeof (this.pipelineList as any).validate === 'function') {
      (this.pipelineList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

