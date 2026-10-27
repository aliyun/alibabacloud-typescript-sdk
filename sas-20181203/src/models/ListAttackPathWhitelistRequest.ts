// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAttackPathWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The page number Settings of the current page for paging in a paged query. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The maximum number of entries to return per page for paging in a paged query. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The path name description.
   * > You can call [ListAvailableAttackPath](~~ListAvailableAttackPath~~) to query path name descriptions.
   * 
   * @example
   * ECS Instance Can Obtain Long-term Access Credential by Enabling Console Logon for RAM User
   */
  pathNameDesc?: string;
  /**
   * @remarks
   * The path type.
   * > You can call [ListAvailableAttackPath](~~ListAvailableAttackPath~~) to query path types.
   * 
   * @example
   * role_escalation
   */
  pathType?: string;
  /**
   * @remarks
   * The whitelist name.
   * 
   * @example
   * test
   */
  whitelistName?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      lang: 'Lang',
      pageSize: 'PageSize',
      pathNameDesc: 'PathNameDesc',
      pathType: 'PathType',
      whitelistName: 'WhitelistName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      lang: 'string',
      pageSize: 'number',
      pathNameDesc: 'string',
      pathType: 'string',
      whitelistName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

