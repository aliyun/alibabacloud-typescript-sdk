// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoutineAccessTokenResponseBody extends $dara.Model {
  /**
   * @example
   * EB775B32-1148-1963-9ADD-74CC90C16459
   */
  requestId?: string;
  /**
   * @example
   * eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb3V0aW5lX2lkIjoidHktbWV0YXEtdGVzdC4xNzEzMTU1ODk3ODg1Njg2IiwiZXhwIjoxNzY0OTQ0NTU3fQ.g3gFr-6GQR8vcg6b_vy1qBZ1LDYOiDP-Sih0wtu3d64
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

