// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyPlaybookResponseBodyCheckTaskInfos extends $dara.Model {
  /**
   * @remarks
   * The error message returned when the playbook does not pass the check.
   * 
   * @example
   * Node [python3_3] doesn\\"t have the asset information
   */
  detail?: string;
  /**
   * @remarks
   * The name of the node in the playbook.
   * 
   * @example
   * python3_3
   */
  nodeName?: string;
  /**
   * @remarks
   * The severity level of the verification information. Valid values:
   * 
   * *   warn: An issue may occur during playbook running.
   * *   error: The playbook cannot be compiled.
   * *   remind: The publishing and running of the playbook are not affected. We recommend that you optimize the playbook format.
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
  prerequisiteType?: string;
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
   * The result of the verification.
   */
  checkTaskInfos?: VerifyPlaybookResponseBodyCheckTaskInfos[];
  prerequisites?: VerifyPlaybookResponseBodyPrerequisites[];
  /**
   * @remarks
   * The request ID.
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

