// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrometheusInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code. Valid values:
   * 
   * - 2XX: success.
   * - 3XX: redirection.
   * - 4XX: request error.
   * - 5XX: server error.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The instance ID returned after the instance is created.
   * 
   * - For aliyun-cs instances, the Prometheus instance ID is the Container Service cluster ID.
   * 
   * - For ecs instances, the Prometheus instance ID is the VPC ID.
   * 
   * @example
   * qduukd****
   */
  data?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 70675725-8F11-4817-8106-CFE0AD71****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: 'string',
      message: 'string',
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

