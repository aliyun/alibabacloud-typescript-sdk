// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdatePrometheusInstanceResponseBody extends $dara.Model {
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
   * ID of the request
   * 
   * @example
   * 1E92F783-E057-58F1-BD5C-92DED088E7A5
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

