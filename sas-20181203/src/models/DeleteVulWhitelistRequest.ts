// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteVulWhitelistRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the vulnerability whitelist.
   * > To delete a vulnerability whitelist, provide the vulnerability whitelist ID. You can obtain this ID by calling the [DescribeVulWhitelist](~~DescribeVulWhitelist~~) operation.
   * 
   * @example
   * 131231
   */
  id?: string;
  /**
   * @remarks
   * The vulnerability whitelist information to delete. The value is a JSON string that contains the following fields:
   * 
   * - **Name**: The name of the vulnerability.
   * - **Type**: The type of the vulnerability. Valid values:
   * 
   *     - **cve**: Linux software vulnerability
   *     - **sys**: Windows system vulnerability
   *     - **cms**: Web-CMS vulnerability
   *     - **app**: application vulnerability
   *     - **emg**: emergency vulnerability
   * 
   * - **AliasName**: The alias of the vulnerability.
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

