// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDasAgentSSEResponseBodyMetadata extends $dara.Model {
  /**
   * @remarks
   * The number of characters in the answer.
   * 
   * @example
   * 1403
   */
  charCount?: number;
  /**
   * @remarks
   * The error type returned when an exception occurs. This field is empty when no exception occurs.
   * 
   * @example
   * -1810001
   */
  code?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04930480-9404-50CB-8252-Axxxxxxxx
   */
  requestId?: string;
  /**
   * @remarks
   * The tool command that is called.
   * 
   * @example
   * SqlFilter
   */
  toolName?: string;
  /**
   * @remarks
   * The tool parameters.
   */
  toolParams?: string[];
  static names(): { [key: string]: string } {
    return {
      charCount: 'CharCount',
      code: 'Code',
      requestId: 'RequestId',
      toolName: 'ToolName',
      toolParams: 'ToolParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      charCount: 'number',
      code: 'number',
      requestId: 'string',
      toolName: 'string',
      toolParams: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.toolParams)) {
      $dara.Model.validateArray(this.toolParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDasAgentSSEResponseBody extends $dara.Model {
  /**
   * @remarks
   * The answer content.
   * 
   * @example
   * rm-xxxx
   */
  answer?: string;
  /**
   * @remarks
   * The type of the returned answer information.
   * 
   * @example
   * summary
   */
  event?: string;
  /**
   * @remarks
   * The session ID, which is the same as the SessionId in the request parameters.
   * 
   * @example
   * 123e4567-e89b-12d3-a456-xxxxxxxxxxxx
   */
  id?: string;
  /**
   * @remarks
   * The metadata.
   */
  metadata?: GetDasAgentSSEResponseBodyMetadata;
  static names(): { [key: string]: string } {
    return {
      answer: 'Answer',
      event: 'Event',
      id: 'Id',
      metadata: 'Metadata',
    };
  }

  static types(): { [key: string]: any } {
    return {
      answer: 'string',
      event: 'string',
      id: 'string',
      metadata: GetDasAgentSSEResponseBodyMetadata,
    };
  }

  validate() {
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

