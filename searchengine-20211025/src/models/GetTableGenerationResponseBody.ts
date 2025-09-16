// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTableGenerationResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * generationId
   * 
   * @example
   * 1708674867
   */
  generationId?: number;
  /**
   * @remarks
   * starting, building, ready, stopped, failed
   * 
   * @example
   * ready
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      generationId: 'generationId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generationId: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTableGenerationResponseBody extends $dara.Model {
  /**
   * @remarks
   * requestId
   * 
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
  requestId?: string;
  /**
   * @remarks
   * The result returned.
   */
  result?: GetTableGenerationResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetTableGenerationResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

