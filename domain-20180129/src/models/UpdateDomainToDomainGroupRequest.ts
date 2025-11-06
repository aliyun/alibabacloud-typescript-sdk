// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDomainToDomainGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  dataSource?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  domainGroupId?: number;
  /**
   * @example
   * example.com
   */
  domainName?: string[];
  /**
   * @example
   * dGVzdA==
   */
  fileToUpload?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * false
   */
  replace?: boolean;
  /**
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

