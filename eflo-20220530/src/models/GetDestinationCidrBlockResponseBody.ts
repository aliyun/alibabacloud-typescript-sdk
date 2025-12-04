// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDestinationCidrBlockResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * List of destination CIDR block information for the current network instance
   */
  destinationCidrBlock?: string[];
  static names(): { [key: string]: string } {
    return {
      destinationCidrBlock: 'DestinationCidrBlock',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destinationCidrBlock: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.destinationCidrBlock)) {
      $dara.Model.validateArray(this.destinationCidrBlock);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetDestinationCidrBlockResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * {}
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * Response content
   */
  content?: GetDestinationCidrBlockResponseBodyContent;
  /**
   * @remarks
   * Error message. (Indicates the reason for the anomaly when the instance status is abnormal.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * ID of this request
   * 
   * @example
   * D349EE86-AF3F-5F6C-87E2-2A08D3618350
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: GetDestinationCidrBlockResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

