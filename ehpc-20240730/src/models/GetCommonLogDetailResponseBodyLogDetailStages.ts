// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCommonLogDetailResponseBodyLogDetailStages extends $dara.Model {
  /**
   * @remarks
   * The log level.
   * 
   * Valid values:
   * 
   * *   ERROR
   * *   INFO
   * *   WARN
   * 
   * @example
   * INFO
   */
  logLevel?: string;
  /**
   * @remarks
   * The output message of the log.
   * 
   * @example
   * Successfully created security group sg-bcd***
   */
  message?: string;
  /**
   * @remarks
   * The method involved in the log.
   * 
   * @example
   * CreateSecurityGroup
   */
  method?: string;
  /**
   * @remarks
   * The request ID associated with the log.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE7****
   */
  requestId?: string;
  /**
   * @remarks
   * The action state involved in the log. Valid values:
   * 
   * *   InProgress: The action is being performed.
   * *   Finished: The action is completed.
   * *   Failed: The action failed.
   * 
   * @example
   * Finished
   */
  status?: string;
  /**
   * @remarks
   * The resource involved in the log.
   * 
   * @example
   * sg-bcd***
   */
  target?: string;
  /**
   * @remarks
   * The time when the log was generated.
   * 
   * @example
   * 2024-08-22 14:21:54
   */
  time?: string;
  static names(): { [key: string]: string } {
    return {
      logLevel: 'LogLevel',
      message: 'Message',
      method: 'Method',
      requestId: 'RequestId',
      status: 'Status',
      target: 'Target',
      time: 'Time',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logLevel: 'string',
      message: 'string',
      method: 'string',
      requestId: 'string',
      status: 'string',
      target: 'string',
      time: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

