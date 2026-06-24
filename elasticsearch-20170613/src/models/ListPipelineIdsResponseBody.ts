// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelineIdsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the pipeline is available. Valid values:
   * 
   * - true: Available.
   * 
   * - false: Not available.
   * 
   * @example
   * true
   */
  available?: boolean;
  /**
   * @remarks
   * The error code returned when the pipeline is unavailable.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The error message returned when the pipeline is unavailable.
   * 
   * @example
   * OK
   */
  message?: string;
  /**
   * @remarks
   * The pipeline ID created in Kibana.
   * 
   * @example
   * testKibanaManagement
   */
  pipelineId?: string;
  static names(): { [key: string]: string } {
    return {
      available: 'available',
      code: 'code',
      message: 'message',
      pipelineId: 'pipelineId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'boolean',
      code: 'string',
      message: 'string',
      pipelineId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPipelineIdsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***
   */
  requestId?: string;
  /**
   * @remarks
   * The list of results.
   */
  result?: ListPipelineIdsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListPipelineIdsResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

