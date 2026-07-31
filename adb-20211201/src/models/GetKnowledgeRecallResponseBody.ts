// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetKnowledgeRecallResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The total number of results.
   * 
   * @example
   * 5
   */
  count?: number;
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * recall 5 files
   */
  message?: string;
  /**
   * @remarks
   * The recall results.
   */
  results?: { [key: string]: any }[];
  /**
   * @remarks
   * The Tracing Analysis ID.
   * 
   * @example
   * qf_c41fc27697d3
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      message: 'Message',
      results: 'Results',
      traceId: 'TraceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      message: 'string',
      results: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      traceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetKnowledgeRecallResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetKnowledgeRecallResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetKnowledgeRecallResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

