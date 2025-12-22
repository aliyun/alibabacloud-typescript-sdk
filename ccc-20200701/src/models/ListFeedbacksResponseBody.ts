// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeedbacksResponseBodyData extends $dara.Model {
  /**
   * @example
   * job-25920271311543****
   */
  contactId?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 20251216-8B9B7B02-16FE-54BE-942A-F59DE0656032
   */
  taskId?: string;
  /**
   * @example
   * PostCallAnalyzer:solution
   */
  taskName?: string;
  /**
   * @example
   * -1
   */
  userRating?: number;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: ListFeedbacksResponseBodyData[];
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  /**
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

