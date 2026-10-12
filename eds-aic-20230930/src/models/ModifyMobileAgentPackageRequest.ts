// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyMobileAgentPackageRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. If you specify this parameter, it cannot be an empty string. The tag key can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http:// or https://.
   * 
   * @example
   * keyname
   */
  key?: string;
  /**
   * @remarks
   * The tag value. It can be an empty string. The tag value can be up to 128 characters in length and cannot start with acs:. It cannot contain http:// or https://.
   * 
   * @example
   * value
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

export class ModifyMobileAgentPackageRequest extends $dara.Model {
  /**
   * @remarks
   * The package ID.
   * 
   * @example
   * cmag-xxxx
   */
  packageId?: string;
  /**
   * @remarks
   * The list of tags. You can specify 1 to 20 tags.
   */
  tag?: ModifyMobileAgentPackageRequestTag[];
  static names(): { [key: string]: string } {
    return {
      packageId: 'PackageId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      packageId: 'string',
      tag: { 'type': 'array', 'itemType': ModifyMobileAgentPackageRequestTag },
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

