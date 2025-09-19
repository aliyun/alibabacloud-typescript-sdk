// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 113.110.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The type of configuration. By default, all types of configurations are queried. Valid values:
   * 
   * *   **cve**: Linux software vulnerability.
   * *   **sys**: Windows system vulnerability.
   * *   **cms**: Web-CMS vulnerability.
   * *   **app**: application vulnerability that is detected by using web scanner.
   * *   **emg**: urgent vulnerability.
   * *   **scanMode**: displays easily exploitable vulnerability.
   * *   **imageVulClean**: vulnerability retention duration.
   * *   **yum**: preferentially uses YUM or APT sources of Alibaba Cloud to fix vulnerabilities.
   * 
   * @example
   * cve
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIp: 'SourceIp',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIp: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

