// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelineResponseBodyHeaders extends $dara.Model {
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 2
   */
  xTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      xTotalCount: 'X-Total-Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xTotalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The time when the pipeline was created.
   * 
   * @example
   * 2020-08-05T03:10:38.188Z
   */
  gmtCreatedTime?: string;
  /**
   * @remarks
   * The time when the pipeline was last updated.
   * 
   * @example
   * 2020-08-05T08:43:31.757Z
   */
  gmtUpdateTime?: string;
  /**
   * @remarks
   * The pipeline ID.
   * 
   * @example
   * pipeline_test
   */
  pipelineId?: string;
  /**
   * @remarks
   * The pipeline status. Valid values:
   * 
   * - NOT_DEPLOYED: not deployed.
   * - RUNNING: running.
   * - DELETED: deleted. This status is not displayed in the console.
   * 
   * @example
   * NOT_DEPLOYED
   */
  pipelineStatus?: string;
  static names(): { [key: string]: string } {
    return {
      gmtCreatedTime: 'gmtCreatedTime',
      gmtUpdateTime: 'gmtUpdateTime',
      pipelineId: 'pipelineId',
      pipelineStatus: 'pipelineStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtCreatedTime: 'string',
      gmtUpdateTime: 'string',
      pipelineId: 'string',
      pipelineStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response headers.
   */
  headers?: ListPipelineResponseBodyHeaders;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned results.
   */
  result?: ListPipelineResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      headers: 'Headers',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: ListPipelineResponseBodyHeaders,
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListPipelineResponseBodyResult },
    };
  }

  validate() {
    if(this.headers && typeof (this.headers as any).validate === 'function') {
      (this.headers as any).validate();
    }
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

