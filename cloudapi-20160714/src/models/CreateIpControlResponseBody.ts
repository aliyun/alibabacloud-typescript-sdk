// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIpControlResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the ACL.
   * 
   * @example
   * 7ea91319a34d48a09b5c9c871d9768b1
   */
  ipControlId?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CE5722A6-AE78-4741-A9B0-6C817D360510
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ipControlId: 'IpControlId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipControlId: 'string',
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

