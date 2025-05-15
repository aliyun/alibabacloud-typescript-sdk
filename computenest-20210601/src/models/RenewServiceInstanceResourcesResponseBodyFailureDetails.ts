// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewServiceInstanceResourcesResponseBodyFailureDetails extends $dara.Model {
  /**
   * @remarks
   * Error code.
   * 
   * @example
   * InvalidPeriod
   */
  errorCode?: string;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * Error message
   */
  errorMessage?: string;
  /**
   * @remarks
   * Resource ARN (Aliyun Resource Name).
   * 
   * @example
   * acs:ecs:cn-hongkong:1488317743351199:instance/i-j6c6f3lbky38o8rpeqw2
   */
  resourceArn?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      resourceArn: 'ResourceArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      resourceArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

