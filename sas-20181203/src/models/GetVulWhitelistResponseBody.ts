// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVulWhitelistResponseBodyVulWhitelist extends $dara.Model {
  /**
   * @remarks
   * The alias of the vulnerability.
   * 
   * @example
   * RHSA-2017:3263: curl security update
   */
  aliasName?: string;
  /**
   * @remarks
   * The ID of the whitelist.
   * 
   * @example
   * 1275
   */
  id?: number;
  /**
   * @remarks
   * The name of the vulnerability.
   * 
   * @example
   * oval:com.redhat.rhsa:def:20173263
   */
  name?: string;
  /**
   * @remarks
   * The reason why the vulnerability is added to the whitelist.
   * 
   * @example
   * Ignore
   */
  reason?: string;
  /**
   * @remarks
   * The application scope of the rule. The value is a JSON string that contains the following fields:
   * 
   * *   **type**: the type of the assets to which the rule is applied. Valid values:
   * 
   *     *   **Uuid**: server
   *     *   **GroupId**: server group
   * 
   * *   **groupIds**: the ID of the server group
   * 
   * *   **uuids**: the UUID of the server
   * 
   * > If this parameter is empty, the rule is applied to all types of assets.
   * 
   * @example
   * {
   *       "type": "GroupId",
   *       "uuids": [],
   *       "groupIds": [
   *             10782678
   *       ]
   * }
   */
  target?: string;
  /**
   * @remarks
   * The type of the vulnerability.
   * 
   * @example
   * cve
   */
  type?: string;
  /**
   * @remarks
   * The information about the vulnerability that is added to the whitelist. The value is a JSON string that contains the following fields:
   * 
   * *   **Name**: the name of the vulnerability.
   * 
   * *   **Type**: the type of the vulnerability. Valid values:
   * 
   *     *   **cve**: Linux software vulnerability
   *     *   **sys**: Windows system vulnerability
   *     *   **cms**: Web-CMS vulnerability
   *     *   **app**: application vulnerability
   *     *   **emg**: urgent vulnerabilities
   * 
   * *   **AliasName**: the alias of the vulnerability.
   * 
   * @example
   * [
   *       {
   *             "Name": "oval:com.redhat.rhsa:def:20173263",
   *             "Type": "cve",
   *             "AliasName": "RHSA-2017:3263: curl security update"
   *       }
   * ]
   */
  whitelist?: string;
  static names(): { [key: string]: string } {
    return {
      aliasName: 'AliasName',
      id: 'Id',
      name: 'Name',
      reason: 'Reason',
      target: 'Target',
      type: 'Type',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliasName: 'string',
      id: 'number',
      name: 'string',
      reason: 'string',
      target: 'string',
      type: 'string',
      whitelist: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetVulWhitelistResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 09969D2C-4FAD-429E-BFBF-9A60DEF8BF6F
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the whitelist.
   */
  vulWhitelist?: GetVulWhitelistResponseBodyVulWhitelist;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vulWhitelist: 'VulWhitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vulWhitelist: GetVulWhitelistResponseBodyVulWhitelist,
    };
  }

  validate() {
    if(this.vulWhitelist && typeof (this.vulWhitelist as any).validate === 'function') {
      (this.vulWhitelist as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

