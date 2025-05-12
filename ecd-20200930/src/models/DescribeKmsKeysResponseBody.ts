// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeKmsKeysResponseBodyKeys } from "./DescribeKmsKeysResponseBodyKeys";


export class DescribeKmsKeysResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authorization status.
   * 
   * @example
   * authorized
   */
  authorizeStatus?: string;
  /**
   * @remarks
   * Details about the customer master keys (CMKs).
   */
  keys?: DescribeKmsKeysResponseBodyKeys[];
  /**
   * @remarks
   * Indicates whether KMS is activated.
   * 
   * @example
   * enabled
   */
  kmsServiceStatus?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizeStatus: 'AuthorizeStatus',
      keys: 'Keys',
      kmsServiceStatus: 'KmsServiceStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizeStatus: 'string',
      keys: { 'type': 'array', 'itemType': DescribeKmsKeysResponseBodyKeys },
      kmsServiceStatus: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.keys)) {
      $dara.Model.validateArray(this.keys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

