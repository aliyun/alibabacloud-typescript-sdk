// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateTaskResponseBodyCreateResultList } from "./CreateTaskResponseBodyCreateResultList";


export class CreateTaskResponseBody extends $dara.Model {
  alertRule?: string;
  /**
   * @example
   * 200
   */
  code?: string;
  createResultList?: CreateTaskResponseBodyCreateResultList;
  data?: string;
  /**
   * @example
   * successfull
   */
  message?: string;
  /**
   * @example
   * a4e6f550-7eac-4a13-b11f-6742aa2d42d1
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: string;
  static names(): { [key: string]: string } {
    return {
      alertRule: 'AlertRule',
      code: 'Code',
      createResultList: 'CreateResultList',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRule: 'string',
      code: 'string',
      createResultList: CreateTaskResponseBodyCreateResultList,
      data: 'string',
      message: 'string',
      requestId: 'string',
      success: 'string',
    };
  }

  validate() {
    if(this.createResultList && typeof (this.createResultList as any).validate === 'function') {
      (this.createResultList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

