// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeedbacksResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The call ID.
   * 
   * @example
   * job-25920271311543****
   */
  contactId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * 20251216-8B9B7B02-16FE-54BE-942A-F59DE0656032
   */
  taskId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * PostCallAnalyzer:solution
   */
  taskName?: string;
  /**
   * @remarks
   * The user\\"s rating for the task.
   * 
   * @example
   * -1
   */
  userRating?: number;
  /**
   * @remarks
   * The data from user feedback.
   * 
   * @example
   * xxxxxxx
   */
  userResponse?: string;
  static names(): { [key: string]: string } {
    return {
      contactId: 'ContactId',
      instanceId: 'InstanceId',
      taskId: 'TaskId',
      taskName: 'TaskName',
      userRating: 'UserRating',
      userResponse: 'UserResponse',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactId: 'string',
      instanceId: 'string',
      taskId: 'string',
      taskName: 'string',
      userRating: 'number',
      userResponse: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFeedbacksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The returned dataset.
   */
  data?: ListFeedbacksResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 26E54929-CA86-1035-9B42-0C8F291BB027
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListFeedbacksResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

