// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitOperationTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The handling result code. Valid values:
   * 
   * *   Insufficient authorization: AuthorizationExhaust
   * *   Unauthorized: ActionTrialUnauthorized
   * 
   * @example
   * AuthorizationExhaust
   */
  operateCode?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 0C8487EF-50C2-54BB-8634-10F8C35D****
   */
  requestId?: string;
  /**
   * @remarks
   * The main task ID that is returned when the task is submitted.
   * 
   * @example
   * 89f5d7813bd59dd237580a8664b3xxxx
   */
  rootTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      operateCode: 'OperateCode',
      requestId: 'RequestId',
      rootTaskId: 'RootTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operateCode: 'string',
      requestId: 'string',
      rootTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

