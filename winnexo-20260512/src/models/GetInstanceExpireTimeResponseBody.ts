// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceExpireTimeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether a standard package instance is found.
   * 
   * @example
   * true
   */
  found?: boolean;
  /**
   * @remarks
   * The expiration time of the instance in ISO format.
   * 
   * @example
   * 2023-10-01T12:00:00Z
   */
  instanceExpireTime?: string;
  /**
   * @remarks
   * The instance ID. This parameter is required.
   * 
   * @example
   * exampleInstanceId
   */
  instanceId?: string;
  /**
   * @remarks
   * The instance status. Valid values:
   * - RUNNING: Running.
   * - TERMINATED: Terminated.
   * - COMPLETED: Completed.
   * - ERROR: Error.
   * 
   * @example
   * string_value
   */
  instanceStatus?: string;
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The effective tenant ID.
   * 
   * @example
   * 10000
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      found: 'found',
      instanceExpireTime: 'instanceExpireTime',
      instanceId: 'instanceId',
      instanceStatus: 'instanceStatus',
      message: 'message',
      requestId: 'requestId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      found: 'boolean',
      instanceExpireTime: 'string',
      instanceId: 'string',
      instanceStatus: 'string',
      message: 'string',
      requestId: 'string',
      tenantId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

