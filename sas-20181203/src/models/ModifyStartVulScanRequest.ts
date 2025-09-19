// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyStartVulScanRequest extends $dara.Model {
  /**
   * @remarks
   * The types of vulnerabilities that can be detected. Valid values:
   * 
   * *   **cve**: Linux software vulnerabilities
   * *   **sys**: Windows system vulnerabilities
   * *   **cms**: Web-CMS vulnerabilities
   * *   **app**: application vulnerabilities
   * *   **emg**: urgent vulnerabilities
   * *   **image**: container image vulnerabilities
   * *   **sca**: vulnerabilities that are detected based on software component analysis
   * 
   * > If you leave this parameter empty, all types of vulnerabilities can be detected.
   * 
   * @example
   * "cve,sys,cms,app,emg"
   */
  types?: string;
  /**
   * @remarks
   * The UUIDs of servers.
   * 
   * @example
   * {"i-sdada-xxxxx","i-ifaedada-sfsasdxxx"}
   */
  uuids?: string;
  static names(): { [key: string]: string } {
    return {
      types: 'Types',
      uuids: 'Uuids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      types: 'string',
      uuids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

