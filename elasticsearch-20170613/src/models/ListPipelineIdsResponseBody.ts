// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPipelineIdsResponseBodyResult extends $dara.Model {
  /**
   * @example
   * true
   */
  available?: boolean;
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
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
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6FE1D***
   */
  requestId?: string;
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

