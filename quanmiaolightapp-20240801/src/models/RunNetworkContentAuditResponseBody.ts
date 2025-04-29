// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RunNetworkContentAuditResponseBodyHeader } from "./RunNetworkContentAuditResponseBodyHeader";
import { RunNetworkContentAuditResponseBodyPayload } from "./RunNetworkContentAuditResponseBodyPayload";


export class RunNetworkContentAuditResponseBody extends $dara.Model {
  header?: RunNetworkContentAuditResponseBodyHeader;
  payload?: RunNetworkContentAuditResponseBodyPayload;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5D0E915E-655D-59A8-894F-93873F73AAE5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      header: 'header',
      payload: 'payload',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: RunNetworkContentAuditResponseBodyHeader,
      payload: RunNetworkContentAuditResponseBodyPayload,
      requestId: 'string',
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.payload && typeof (this.payload as any).validate === 'function') {
      (this.payload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

