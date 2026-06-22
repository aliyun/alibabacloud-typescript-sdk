// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyStartVulScanRequest extends $dara.Model {
  /**
   * @remarks
   * Settings for the types of vulnerabilities to detect by using the one-click scan feature. Valid values:
   * - **cve**: Linux software vulnerability.
   * - **sys**: Windows system vulnerability.
   * - **cms**: Web-CMS vulnerability.
   * - **app**: Application vulnerability detected by the web scanner.
   * - **emg**: Emergency vulnerability.
   * - **image**: Container image vulnerability.
   * - **sca**: Application vulnerability detected by software constituency parsing.
   * > If this parameter is left empty, all vulnerability types are detected.
   * 
   * @example
   * "cve,sys,cms,app,emg"
   */
  types?: string;
  /**
   * @remarks
   * The list of server UUIDs. Separate multiple UUIDs with commas (,).
   * 
   * > You can call the [DescribeCloudCenterInstances](https://help.aliyun.com/document_detail/421726.html) operation to obtain this parameter.
   * 
   * @example
   * 1587bedb-fdb4-48c4-9330-****
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

