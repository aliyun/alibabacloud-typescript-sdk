// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCheckResultResponseBodyCheckResultList extends $dara.Model {
  /**
   * @remarks
   * The compliance status. Valid values:
   * 
   * *   **1**: compliant
   * *   **0**: non-compliant
   * 
   * @example
   * 1
   */
  complianceStatus?: number;
  /**
   * @remarks
   * The name of the corresponding section. Valid values:
   * 
   * *   **information_classification**: information classification
   * *   **information_mark**: information labeling
   * *   **network_security_policy**: access to networks and network services
   * *   **login_control**: secure logon procedures
   * *   **week_password**: password management system
   * *   **key_manage**: key management
   * *   **malicious_software**: protection against malware
   * *   **information_backup**: information backup
   * *   **audit_policy**: information system audit control mechanisms
   * 
   * @example
   * information_mark
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      complianceStatus: 'ComplianceStatus',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceStatus: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCheckResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The check results.
   */
  checkResultList?: DescribeCheckResultResponseBodyCheckResultList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 571B2642-BF51-5BDD-906B-D2340DB9****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkResultList: 'CheckResultList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResultList: { 'type': 'array', 'itemType': DescribeCheckResultResponseBodyCheckResultList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkResultList)) {
      $dara.Model.validateArray(this.checkResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

