// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OnsInstanceInServiceListRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. This parameter is not required. If you configure this parameter, you must also configure **Value**.**** If you configure Key and Value in a request, this operation queries only the instances that use the specified tags. If you do not configure these parameters in a request, this operation queries all instances that you can access.
   * 
   * *   The value of this parameter cannot be an empty string.
   * *   The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * CartService
   */
  key?: string;
  /**
   * @remarks
   * The tag value. This parameter is not required. If you configure this parameter, you must also configure **Key**.**** If you configure Key and Value in a request, this operation queries only the instances that use the specified tags. If you do not configure these parameters in a request, this operation queries all instances that you can access.
   * 
   * *   The value of this parameter can be an empty string.
   * *   The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `acs:` or `aliyun`.
   * 
   * @example
   * SericeA
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class OnsInstanceInServiceListRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether you want the resource information to be returned.
   * 
   * @example
   * true
   */
  needResourceInfo?: boolean;
  /**
   * @remarks
   * The tags that you want to attach to the instance. You can attach up to 20 tags to the instance.
   */
  tag?: OnsInstanceInServiceListRequestTag[];
  static names(): { [key: string]: string } {
    return {
      needResourceInfo: 'NeedResourceInfo',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      needResourceInfo: 'boolean',
      tag: { 'type': 'array', 'itemType': OnsInstanceInServiceListRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

