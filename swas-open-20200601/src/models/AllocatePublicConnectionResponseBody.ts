// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocatePublicConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The public endpoint.
   * 
   * @example
   * db-38263fa955774501a2ae1bdaed6f****.mysql.rds.aliyuncs.com
   */
  publicConnection?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 30637AD6-D977-4833-A54C-CC89483E****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      publicConnection: 'PublicConnection',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      publicConnection: 'string',
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

