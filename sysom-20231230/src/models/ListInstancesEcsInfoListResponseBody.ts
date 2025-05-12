// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstancesEcsInfoListResponseBodyData } from "./ListInstancesEcsInfoListResponseBodyData";


export class ListInstancesEcsInfoListResponseBody extends $dara.Model {
  /**
   * @example
   * SysomOpenAPI.InvalidParameter
   */
  code?: string;
  data?: ListInstancesEcsInfoListResponseBodyData[];
  /**
   * @example
   * ""
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListInstancesEcsInfoListResponseBodyData },
      message: 'string',
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

