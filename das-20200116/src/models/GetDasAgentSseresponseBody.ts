// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDasAgentSSEResponseBodyMetadata extends $dara.Model {
  /**
   * @example
   * 1403
   */
  charCount?: number;
  code?: number;
  /**
   * @example
   * 04930480-9404-50CB-8252-Axxxxxxxx
   */
  requestId?: string;
  /**
   * @example
   * SqlFilter
   */
  toolName?: string;
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
   * @example
   * rm-xxxx
   */
  answer?: string;
  /**
   * @example
   * summary
   */
  event?: string;
  /**
   * @example
   * xxx-xxx-xxx
   */
  id?: string;
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

