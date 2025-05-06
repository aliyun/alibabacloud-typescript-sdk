// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeScheduleTasksResponseBodyData } from "./DescribeScheduleTasksResponseBodyData";


export class DescribeScheduleTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result data.
   */
  data?: DescribeScheduleTasksResponseBodyData;
  /**
   * @remarks
   * The message that is returned for the request.
   * 
   * >  If the request is successful, **Successful** is returned. If the request fails, an error message such as an error code is returned.
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
   * 936C7025-27A5-4CB1-BB31-540E1F0CCA12
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeScheduleTasksResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

