// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCompliancePackRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource.
   * 
   * The tag key cannot be an empty string. The tag key can be up to 64 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * You can specify up to 20 tag keys at a time.
   * 
   * @example
   * key-1
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the resource.
   * 
   * The tag value can be an empty string or a string of up to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.
   * 
   * Each tag key must have a corresponding tag value. You can specify up to 20 tag values at a time.
   * 
   * @example
   * value-1
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

export class GetCompliancePackRequest extends $dara.Model {
  /**
   * @remarks
   * The compliance package ID.
   * 
   * For more information about how to obtain the compliance package ID, see [ListCompliancePacks](https://help.aliyun.com/document_detail/263332.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cp-a8a8626622af0082****
   */
  compliancePackId?: string;
  /**
   * @remarks
   * The tags of the resource. This parameter is deprecated and takes no effect if it is specified.
   * 
   * You can add up to 20 tags.
   * 
   * @deprecated
   */
  tag?: GetCompliancePackRequestTag[];
  static names(): { [key: string]: string } {
    return {
      compliancePackId: 'CompliancePackId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliancePackId: 'string',
      tag: { 'type': 'array', 'itemType': GetCompliancePackRequestTag },
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

