// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAttackPathWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * When performing a paginated query, set the current page number. The default value is **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The language type for requests and responses. The default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * When performing a paginated query, set the maximum number of items per page. The default value is 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Path name description.
   * > You can call [ListAvailableAttackPath](~~ListAvailableAttackPath~~) to query the path name descriptions.
   * 
   * @example
   * ECS Instance Can Obtain Long-term Access Credential by Enabling Console Logon for RAM User
   */
  pathNameDesc?: string;
  /**
   * @remarks
   * Path type.
   * > You can call [ListAvailableAttackPath](~~ListAvailableAttackPath~~) to query the path types.
   * 
   * @example
   * role_escalation
   */
  pathType?: string;
  /**
   * @remarks
   * Whitelist name.
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

