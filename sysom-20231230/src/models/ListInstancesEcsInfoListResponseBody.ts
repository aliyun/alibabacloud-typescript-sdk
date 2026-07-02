// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesEcsInfoListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The IP address of the machine.
   * 
   * @example
   * 11.193.52.91
   */
  ip?: string;
  /**
   * @remarks
   * The tag name.
   * 
   * @example
   * sysom
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * diagnosis
   */
  tagValue?: string;
  /**
   * @remarks
   * The IP address type.
   * 
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
   * @remarks
   * The error code.
   * 
   * @example
   * SysomOpenAPI.InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListInstancesEcsInfoListResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * - If `code == Success`, this field is empty.
   * - Otherwise, this field contains the request error message.
   * 
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

