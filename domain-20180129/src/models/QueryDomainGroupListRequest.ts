// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainGroupListRequest extends $dara.Model {
  domainGroupName?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * false
   */
  showDeletingGroup?: boolean;
  /**
   * @example
   * 127.0.0.1
   */
  userClientIp?: string;
  static names(): { [key: string]: string } {
    return {
      domainGroupName: 'DomainGroupName',
      lang: 'Lang',
      showDeletingGroup: 'ShowDeletingGroup',
      userClientIp: 'UserClientIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainGroupName: 'string',
      lang: 'string',
      showDeletingGroup: 'boolean',
      userClientIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

