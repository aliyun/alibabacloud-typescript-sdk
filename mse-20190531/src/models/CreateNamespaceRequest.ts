// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNamespaceRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the resource. You cannot specify an empty string as a tag key. The tag key can be up to 128 characters in length and cannot start with aliyun or acs:. It cannot contain http\\:// or https\\://.
   * 
   * @example
   * namespaceTagKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be up to 128 characters in length and cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.
   * 
   * @example
   * namespaceTagValue
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

export class CreateNamespaceRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want the results to be displayed. Valid values: zh (default): Chinese. en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The description of the namespace that you want to create for Microservices Governance.
   * 
   * @example
   * Test namespace 1.
   */
  describe?: string;
  /**
   * @remarks
   * The name of the namespace that you want to create for Microservices Governance.
   * 
   * @example
   * myNamespace
   */
  name?: string;
  /**
   * @remarks
   * The tag.
   */
  tag?: CreateNamespaceRequestTag[];
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      describe: 'Describe',
      name: 'Name',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      describe: 'string',
      name: 'string',
      tag: { 'type': 'array', 'itemType': CreateNamespaceRequestTag },
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

