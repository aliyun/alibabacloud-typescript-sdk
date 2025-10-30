// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrometheusInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * rw-abc123
   */
  prometheusInstanceId?: string;
  /**
   * @remarks
   * ID of the request.
   * 
   * @example
   * 264C3E89-BE6E-5F82-A484-CE9C2196C7DC
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      prometheusInstanceId: 'prometheusInstanceId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prometheusInstanceId: 'string',
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

