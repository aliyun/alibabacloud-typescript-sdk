// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIpamPoolCidrResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F28A239E-F88D-500E-ADE7-FA5E8CA3A170
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

