// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCiphersResponseBody extends $dara.Model {
  /**
   * @remarks
   * Name of the cipher suite group.
   * 
   * @example
   * all
   */
  ciphersGroup?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 0AEDAF20-4DDF-4165-8750-47FF9C1929C9
   */
  requestId?: string;
  /**
   * @remarks
   * Returned result.
   */
  result?: string[];
  /**
   * @remarks
   * Total number of cipher suites.
   * 
   * @example
   * 16
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      ciphersGroup: 'CiphersGroup',
      requestId: 'RequestId',
      result: 'Result',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ciphersGroup: 'string',
      requestId: 'string',
      result: { 'type': 'array', 'itemType': 'string' },
      totalCount: 'number',
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

