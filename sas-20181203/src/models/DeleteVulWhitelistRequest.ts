// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVulWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the whitelist.
   * 
   * >  To delete a vulnerability whitelist, you must provide the ID of the whitelist. You can call the [DescribeVulWhitelist](~~DescribeVulWhitelist~~) operation to query the IDs of whitelists.
   * 
   * @example
   * 131231
   */
  id?: string;
  /**
   * @remarks
   * The information about the whitelist. The value is a JSON string that contains the following fields:
   * 
   * *   **Name**: the name of the vulnerability.
   * 
   * *   **Type**: the type of the vulnerability. Valid values:
   * 
   *     *   **cve**: Linux software vulnerability
   *     *   **sys**: Windows system vulnerability
   *     *   **cms**: Web-CMS vulnerability
   *     *   **app**: application vulnerability
   *     *   **emg**: urgent vulnerability
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
      id: 'Id',
      whitelist: 'Whitelist',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
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

