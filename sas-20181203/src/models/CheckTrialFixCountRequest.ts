// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckTrialFixCountRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the vulnerability. The value of this parameter is in the JSON format and contains the following fields:
   * 
   * *   **name**: the name of the vulnerability.
   * 
   * *   **uuid**: the UUID of the server on which the vulnerability is detected.
   * 
   * *   **tag**: the tag that is added to the vulnerability. Valid values:
   * 
   *     *   **oval**: Linux software vulnerability.
   *     *   **system**: Windows system vulnerability.
   *     *   **cms**: Web-CMS vulnerability.
   * 
   * >  You must specify a value for Info or values for VulNames and Uuids to identify a vulnerability.
   * 
   * @example
   * [{\\"name\\":\\"oval:com.redhat.rhsa:def:20192143\\",\\"uuid\\":\\"80ee3226-1f96-4da0-a3ed-55c104e2****\\",\\"tag\\":\\"oval\\"}]
   */
  info?: string;
  /**
   * @remarks
   * The type of the vulnerability that you want to fix. Valid values:
   * 
   * *   **cve**: Linux software vulnerability.
   * *   **sys**: Windows system vulnerability.
   * *   **cms**: Web-CMS vulnerability.
   * 
   * This parameter is required.
   * 
   * @example
   * cve
   */
  type?: string;
  /**
   * @remarks
   * The UUIDs of the servers.
   */
  uuids?: string[];
  /**
   * @remarks
   * The names of the vulnerabilities.
   */
  vulNames?: string[];
  static names(): { [key: string]: string } {
    return {
      info: 'Info',
      type: 'Type',
      uuids: 'Uuids',
      vulNames: 'VulNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      info: 'string',
      type: 'string',
      uuids: { 'type': 'array', 'itemType': 'string' },
      vulNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.uuids)) {
      $dara.Model.validateArray(this.uuids);
    }
    if(Array.isArray(this.vulNames)) {
      $dara.Model.validateArray(this.vulNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

