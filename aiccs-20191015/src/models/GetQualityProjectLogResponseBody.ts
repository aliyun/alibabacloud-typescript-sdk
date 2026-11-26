// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityProjectLogResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The execution data of the task.
   * 
   * @example
   * Sampling quality inspection details: Total number of eligible samples=0
   */
  actionData?: string;
  /**
   * @remarks
   * The time when the task was executed.
   * 
   * @example
   * 2021-04-16 08:44:26
   */
  actionTime?: string;
  /**
   * @remarks
   * The execution type.
   * 
   * @example
   * Sampling quality inspection
   */
  actionType?: string;
  /**
   * @remarks
   * The time when the quality inspection task was created.
   * 
   * @example
   * 2021-04-07 18:07:18
   */
  projectCreateTime?: string;
  /**
   * @remarks
   * The ID of the quality inspection task.
   * 
   * @example
   * 15977801
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      actionData: 'ActionData',
      actionTime: 'ActionTime',
      actionType: 'ActionType',
      projectCreateTime: 'ProjectCreateTime',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionData: 'string',
      actionTime: 'string',
      actionType: 'string',
      projectCreateTime: 'string',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityProjectLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. A value of 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The task logs of the quality inspection node.
   */
  data?: GetQualityProjectLogResponseBodyData[];
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call was successful.
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
      code: 'string',
      data: { 'type': 'array', 'itemType': GetQualityProjectLogResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

