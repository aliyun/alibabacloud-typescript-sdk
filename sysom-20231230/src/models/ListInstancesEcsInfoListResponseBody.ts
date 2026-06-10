// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesEcsInfoListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * IP address of the machine.
   * 
   * @example
   * 11.193.52.91
   */
  ip?: string;
  /**
   * @remarks
   * Name of the tag.
   * 
   * @example
   * sysom
   */
  tagKey?: string;
  /**
   * @remarks
   * tag value.
   * 
   * @example
   * diagnosis
   */
  tagValue?: string;
  /**
   * @remarks
   * IP type
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
   * error code
   * 
   * @example
   * SysomOpenAPI.InvalidParameter
   */
  code?: string;
  /**
   * @remarks
   * Return Data.
   */
  data?: ListInstancesEcsInfoListResponseBodyData[];
  /**
   * @remarks
   * error message  
   * - If `code == Success`, this field is empty;  
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

