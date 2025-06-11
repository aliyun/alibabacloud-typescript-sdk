// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyInstanceSSLResponseBodyInstanceSSL } from "./ModifyInstanceSslresponseBodyInstanceSsl";


export class ModifyInstanceSSLResponseBody extends $dara.Model {
  /**
   * @remarks
   * The SSL setting of the OceanBase cluster instance.
   */
  instanceSSL?: ModifyInstanceSSLResponseBodyInstanceSSL;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EE205C00-30E4-****-****-87E3A8A2AA0C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceSSL: 'InstanceSSL',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSSL: ModifyInstanceSSLResponseBodyInstanceSSL,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceSSL && typeof (this.instanceSSL as any).validate === 'function') {
      (this.instanceSSL as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

