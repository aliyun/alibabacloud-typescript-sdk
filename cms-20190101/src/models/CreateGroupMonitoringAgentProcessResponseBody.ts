// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupMonitoringAgentProcessResponseBodyResource extends $dara.Model {
  /**
   * @remarks
   * The ID of the group process.
   * 
   * @example
   * 7F2B0024-4F21-48B9-A764-211CEC48****
   */
  groupProcessId?: string;
  static names(): { [key: string]: string } {
    return {
      groupProcessId: 'GroupProcessId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupProcessId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateGroupMonitoringAgentProcessResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * > The status code 200 indicates that the call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The Request is not authorization.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3F6150F9-45C7-43F9-9578-A58B2E726C90
   */
  requestId?: string;
  /**
   * @remarks
   * The group process information.
   */
  resource?: CreateGroupMonitoringAgentProcessResponseBodyResource;
  /**
   * @remarks
   * Indicates whether the call is successful. Valid values:
   * 
   * *   true: The call is successful.
   * *   false: The call fails.
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
      resource: 'Resource',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      resource: CreateGroupMonitoringAgentProcessResponseBodyResource,
      success: 'boolean',
    };
  }

  validate() {
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

