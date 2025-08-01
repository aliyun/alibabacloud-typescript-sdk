// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesEcsInfoListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 11.193.52.91
   */
  ip?: string;
  /**
   * @example
   * sysom
   */
  tagKey?: string;
  /**
   * @example
   * diagnosis
   */
  tagValue?: string;
  /**
   * @example
   * public
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ip: 'ip',
      tagKey: 'tag_key',
      tagValue: 'tag_value',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ip: 'string',
      tagKey: 'string',
      tagValue: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

