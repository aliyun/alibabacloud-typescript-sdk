// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetManagedPrometheusStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The installation status of the Prometheus agent.
   * 
   * *   Installing: The Prometheus agent is installed and no registration information is available.
   * *   Succeed: The Prometheus agent is installed and registered.
   * *   Failure: The Prometheus agent failed to be installed or registered.
   * *   Unknown: The installation status of the Prometheus agent is unknown.
   * 
   * @example
   * Installing
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F7781D4A-2818-41E7-B7BB-79D809E9****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
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

