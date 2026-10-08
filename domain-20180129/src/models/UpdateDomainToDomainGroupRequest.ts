// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDomainToDomainGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The data source for the domain names. Valid values:
   * 
   * - **1**: custom input.
   * 
   * - **2**: file upload.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  dataSource?: number;
  /**
   * @remarks
   * The ID of the domain name group. Call the [QueryDomainGroupList](https://help.aliyun.com/document_detail/69362.html) API to get this ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  domainGroupId?: number;
  /**
   * @remarks
   * An array of domain names. This parameter is required when DataSource is set to 1 (custom input).
   * 
   * @example
   * example.com
   */
  domainName?: string[];
  /**
   * @remarks
   * The Base64-encoded content of a file. This parameter is required if you set DataSource to 2. The file must be in **.xls** or **.xlsx** format, contain one domain name per line, and not exceed 2 MB.
   * 
   * @example
   * dGVzdA==
   */
  fileToUpload?: string;
  /**
   * @remarks
   * The language of API error messages. Valid values:
   * 
   * - **zh**: Chinese
   * 
   * - **en**: English
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Specifies whether to replace the existing domain names in the group. Valid values:
   * 
   * - **false**: Adds the new domain names to the group.
   * 
   * - **true**: Replaces all existing domain names in the group with the new ones.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  replace?: boolean;
  /**
   * @remarks
   * The user IP address. You can set this parameter to **127.0.0.1**.
   * 
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      dataSource: 'DataSource',
      domainGroupId: 'DomainGroupId',
      domainName: 'DomainName',
      fileToUpload: 'FileToUpload',
      lang: 'Lang',
      replace: 'Replace',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSource: 'number',
      domainGroupId: 'number',
      domainName: { 'type': 'array', 'itemType': 'string' },
      fileToUpload: 'string',
      lang: 'string',
      replace: 'boolean',
      userClientIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainName)) {
      $dara.Model.validateArray(this.domainName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

