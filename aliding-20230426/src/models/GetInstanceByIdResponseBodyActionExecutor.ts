// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInstanceByIdResponseBodyActionExecutorName } from "./GetInstanceByIdResponseBodyActionExecutorName";


export class GetInstanceByIdResponseBodyActionExecutor extends $dara.Model {
  /**
   * @example
   * 开发部
   */
  deptName?: string;
  /**
   * @example
   * abc@alimail.com
   */
  email?: string;
  name?: GetInstanceByIdResponseBodyActionExecutorName;
  /**
   * @example
   * manager123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      deptName: 'DeptName',
      email: 'Email',
      name: 'Name',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deptName: 'string',
      email: 'string',
      name: GetInstanceByIdResponseBodyActionExecutorName,
      userId: 'string',
    };
  }

  validate() {
    if(this.name && typeof (this.name as any).validate === 'function') {
      (this.name as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

