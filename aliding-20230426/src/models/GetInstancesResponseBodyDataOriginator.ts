// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInstancesResponseBodyDataOriginatorName } from "./GetInstancesResponseBodyDataOriginatorName";


export class GetInstancesResponseBodyDataOriginator extends $dara.Model {
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
  name?: GetInstancesResponseBodyDataOriginatorName;
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
      name: GetInstancesResponseBodyDataOriginatorName,
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

