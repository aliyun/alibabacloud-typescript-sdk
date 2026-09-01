// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyPlaybookResponseBodyCheckTaskInfos extends $dara.Model {
  /**
   * @remarks
   * The specific error message that is returned if the verification fails.
   * 
   * @example
   * Node [python3_3] doesn\\"t have the asset information
   */
  detail?: string;
  /**
   * @remarks
   * The name of the playbook node.
   * 
   * @example
   * python3_3
   */
  nodeName?: string;
  /**
   * @remarks
   * The severity level of the verification message. Valid values:
   * 
   * - **warn**: A warning message. An issue may occur when the playbook runs.
   * 
   * - **error**: An error message. The playbook fails to be compiled.
   * 
   * - **remind**: A suggestion. This does not affect publishing or running the playbook. Optimize the playbook format.
   * 
   * @example
   * error
   */
  riskLevel?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      nodeName: 'NodeName',
      riskLevel: 'RiskLevel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: 'string',
      nodeName: 'string',
      riskLevel: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPlaybookResponseBodyPrerequisites extends $dara.Model {
  /**
   * @remarks
   * The check type. Valid values:
   * 
   * - **role**: The name of the custom RAM role.
   * 
   * - **policies**: The list of RAM system policies.
   * 
   * @example
   * role
   */
  prerequisiteType?: string;
  /**
   * @remarks
   * The check content. The value is determined as follows:
   * 
   * - If PrerequisiteType is **role**, the value is the static field AliyunSiemSoarExecutionDefaultRole.
   * 
   * - If PrerequisiteType is **policies**, the value is a collection of policy names.
   * 
   * @example
   * AliyunSiemSoarExecutionDefaultRole
   */
  prerequisiteValue?: string;
  static names(): { [key: string]: string } {
    return {
      prerequisiteType: 'PrerequisiteType',
      prerequisiteValue: 'PrerequisiteValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prerequisiteType: 'string',
      prerequisiteValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyPlaybookResponseBody extends $dara.Model {
  /**
   * @remarks
   * The verification results.
   */
  checkTaskInfos?: VerifyPlaybookResponseBodyCheckTaskInfos[];
  /**
   * @remarks
   * The prerequisite check information for the playbook.
   */
  prerequisites?: VerifyPlaybookResponseBodyPrerequisites[];
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates this unique identifier for the request. Use this ID to troubleshoot and locate issues.
   * 
   * @example
   * 0DFC9403-54EB-5672-B690-9AA93C9EBB54
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkTaskInfos: 'CheckTaskInfos',
      prerequisites: 'Prerequisites',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkTaskInfos: { 'type': 'array', 'itemType': VerifyPlaybookResponseBodyCheckTaskInfos },
      prerequisites: { 'type': 'array', 'itemType': VerifyPlaybookResponseBodyPrerequisites },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkTaskInfos)) {
      $dara.Model.validateArray(this.checkTaskInfos);
    }
    if(Array.isArray(this.prerequisites)) {
      $dara.Model.validateArray(this.prerequisites);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

