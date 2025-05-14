// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInstancesByIdListResponseBodyResultOriginatorName } from "./GetInstancesByIdListResponseBodyResultOriginatorName";


export class GetInstancesByIdListResponseBodyResultOriginator extends $dara.Model {
  /**
   * @example
   * 开发部
   */
  departmentName?: string;
  /**
   * @example
   * abc@alimail.com
   */
  email?: string;
  name?: GetInstancesByIdListResponseBodyResultOriginatorName;
  /**
   * @example
   * manager123
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      departmentName: 'DepartmentName',
      email: 'Email',
      name: 'Name',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentName: 'string',
      email: 'string',
      name: GetInstancesByIdListResponseBodyResultOriginatorName,
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

