// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * 83967609-7ea5-4f6d-a6ea-380b09e****
   */
  id?: string;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 864FE2F4-CB2E-4024-B9EF-D59FD08A****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

