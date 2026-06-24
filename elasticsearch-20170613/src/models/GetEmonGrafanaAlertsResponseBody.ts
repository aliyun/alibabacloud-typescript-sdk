// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEmonGrafanaAlertsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 08FA74C7-5654-4309-9729-D555AF587B7F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the Grafana alert list is retrieved. Valid values:
   * 
   * - true: The alert list is retrieved.
   * - false: The alert list failed to be retrieved.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

