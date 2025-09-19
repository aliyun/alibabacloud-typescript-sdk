// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVulConfigResponseBodyTargetConfigs extends $dara.Model {
  /**
   * @remarks
   * The configuration of vulnerability scan.
   * 
   * > Valid values when you set the Type parameter to **cve**, **sys**, **cms**, **app**, **emg**, or **yum**:
   * 
   * *   **on**: enabled
   * 
   * *   **off**: disabled
   * 
   * Valid values when you set the Type parameter to **scanMode**:
   * 
   * *   **real**: displays easily exploitable vulnerability.
   * 
   * *   **all**: displays all vulnerabilities.
   * 
   * When you set the Type parameter to **imageVulClean**, the value of this parameter indicates the vulnerability retention period in days.
   * 
   * @example
   * 90
   */
  config?: string;
  /**
   * @remarks
   * Indicates whether the vulnerability management feature is enabled for all servers. Valid values:
   * 
   * *   **off**: disabled
   * *   **on**: enabled
   * 
   * @example
   * on
   */
  overAllConfig?: string;
  /**
   * @remarks
   * The type of configuration. Valid values:
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
      config: 'Config',
      overAllConfig: 'OverAllConfig',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      overAllConfig: 'string',
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

export class DescribeVulConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 24A20733-10A0-4AF6-BE6B-E3322413BB68
   */
  requestId?: string;
  /**
   * @remarks
   * An array that consists of the configurations of vulnerability management.
   */
  targetConfigs?: DescribeVulConfigResponseBodyTargetConfigs[];
  /**
   * @remarks
   * The total number of configurations.
   * 
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      targetConfigs: 'TargetConfigs',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      targetConfigs: { 'type': 'array', 'itemType': DescribeVulConfigResponseBodyTargetConfigs },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.targetConfigs)) {
      $dara.Model.validateArray(this.targetConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

