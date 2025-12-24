// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlaybookResponseBodyPlaybook extends $dara.Model {
  /**
   * @remarks
   * The description of the playbook.
   * 
   * @example
   * demo playbook
   */
  description?: string;
  /**
   * @remarks
   * The display name of the playbook.
   * 
   * @example
   * demo_test
   */
  displayName?: string;
  /**
   * @remarks
   * The number of times that the playbook failed to be run.
   * 
   * @example
   * 1
   */
  failExeNum?: number;
  /**
   * @remarks
   * The creation time of the playbook. The value is a 13-digit timestamp.
   * 
   * @example
   * 1665288858000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time of the playbook. The value is a 13-digit timestamp.
   * 
   * @example
   * 1677482519000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The input parameter configuration of the playbook. The value is a JSON array.
   * 
   * >  For more information, see [DescribePlaybookInputOutput](~~DescribePlaybookInputOutput~~).
   * 
   * @example
   * [
   *     {
   *         "typeName": "String",
   *         "dataClass": "normal",
   *         "dataType": "String",
   *         "description": "period",
   *         "example": "",
   *         "name": "period",
   *         "required": false
   *     }
   * ]
   */
  inputParams?: string;
  /**
   * @remarks
   * The time when the playbook was last run. The value is a 13-digit timestamp.
   * 
   * @example
   * 1665288858000
   */
  lastExeTime?: number;
  /**
   * @remarks
   * The status of the playbook. Valid values:
   * 
   * *   **0**: disabled
   * *   **1**: enabled
   * 
   * @example
   * 0
   */
  onlineActive?: boolean;
  /**
   * @remarks
   * The MD5 hash value in the latest published version of the playbook.
   * 
   * @example
   * asdfsdfe232-e2b2-44fd-b2cc-xxxxx
   */
  onlineReleaseTaskflowMd5?: string;
  /**
   * @remarks
   * The type of the playbook. Valid values:
   * 
   * *   **preset**: predefined playbook
   * *   **user**: custom playbook
   * 
   * @example
   * preset
   */
  ownType?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * @example
   * 8db257d3-e2b2-44fd-b2cc-xxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The number of times that the playbook was successfully run.
   * 
   * @example
   * 100
   */
  successExeNum?: number;
  /**
   * @remarks
   * The XML configuration of the playbook.
   * 
   * @example
   * <?xml version="1.0" encoding="UTF-8"?><bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" targetNamespace="http://bpmn.io/schema/bpmn" id="Definitions_1"><bpmn:process id="Process_1" isExecutable="false"><bpmn:startEvent id="StartEvent_1"/></bpmn:process><bpmndi:BPMNDiagram id="BPMNDiagram_1"><bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1"><bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1"><dc:Bounds height="36.0" width="36.0" x="173.0" y="102.0"/></bpmndi:BPMNShape></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></bpmn:definitions>
   */
  taskflow?: string;
  /**
   * @remarks
   * The playbook configuration type.
   * *   **xml**: XML format.
   * *   **x6**: JSON format.
   * 
   * @example
   * xml
   */
  taskflowType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      failExeNum: 'FailExeNum',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      inputParams: 'InputParams',
      lastExeTime: 'LastExeTime',
      onlineActive: 'OnlineActive',
      onlineReleaseTaskflowMd5: 'OnlineReleaseTaskflowMd5',
      ownType: 'OwnType',
      playbookUuid: 'PlaybookUuid',
      successExeNum: 'SuccessExeNum',
      taskflow: 'Taskflow',
      taskflowType: 'TaskflowType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      failExeNum: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      inputParams: 'string',
      lastExeTime: 'number',
      onlineActive: 'boolean',
      onlineReleaseTaskflowMd5: 'string',
      ownType: 'string',
      playbookUuid: 'string',
      successExeNum: 'number',
      taskflow: 'string',
      taskflowType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration of the playbook.
   */
  playbook?: DescribePlaybookResponseBodyPlaybook;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2989BC59-E9F0-5C83-B453-B368857649C8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      playbook: 'Playbook',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      playbook: DescribePlaybookResponseBodyPlaybook,
      requestId: 'string',
    };
  }

  validate() {
    if(this.playbook && typeof (this.playbook as any).validate === 'function') {
      (this.playbook as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

