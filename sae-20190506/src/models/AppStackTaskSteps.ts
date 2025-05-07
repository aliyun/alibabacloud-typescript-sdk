// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppStackTaskSteps extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 0
   */
  duration?: number;
  /**
   * @example
   * 1706518652
   */
  endTime?: number;
  /**
   * @example
   * VPC_CREATE_NETWORK
   */
  id?: string;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 初始化 VPC 网络
   */
  name?: string;
  /**
   * @example
   * 1706518652
   */
  startTime?: number;
  /**
   * @example
   * WAIT
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      duration: 'Duration',
      endTime: 'EndTime',
      id: 'Id',
      message: 'Message',
      name: 'Name',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      duration: 'number',
      endTime: 'number',
      id: 'string',
      message: 'string',
      name: 'string',
      startTime: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

