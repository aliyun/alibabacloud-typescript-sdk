// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeConcernNecessityResponseBody extends $dara.Model {
  /**
   * @remarks
   * The priorities to fix the vulnerabilities. Valid values:
   * 
   * *   asap: high
   * *   later: medium
   * *   nntf: low
   */
  concernNecessity?: string[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * ECC6B3E3-D496-512D-B46D-E6996A6B63EE
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      concernNecessity: 'ConcernNecessity',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      concernNecessity: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.concernNecessity)) {
      $dara.Model.validateArray(this.concernNecessity);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

