// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DebugPlaybookRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * > Call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * f916b93e-e814-459f-9662-xxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The user-defined input parameters for debugging the playbook.
   * 
   * @example
   * {
   *    "param1":"a",
   *    "param2":"b"
   * }
   */
  record?: string;
  /**
   * @remarks
   * The XML configuration of the playbook.
   * 
   * > Call the [DescribePlaybook](~~DescribePlaybook~~) operation to obtain this configuration.
   * 
   * This parameter is required.
   * 
   * @example
   * <?xml version="1.0" encoding="UTF-8"?><bpmn:definitions xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" targetNamespace="http://bpmn.io/schema/bpmn" id="Definitions_1"><bpmn:process id="Process_1" isExecutable="false"><bpmn:startEvent id="StartEvent_1"/></bpmn:process><bpmndi:BPMNDiagram id="BPMNDiagram_1"><bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1"><bpmndi:BPMNShape id="_BPMNShape_StartEvent_2" bpmnElement="StartEvent_1"><dc:Bounds height="36.0" width="36.0" x="173.0" y="102.0"/></bpmndi:BPMNShape></bpmndi:BPMNPlane></bpmndi:BPMNDiagram></bpmn:definitions>
   */
  taskflow?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      playbookUuid: 'PlaybookUuid',
      record: 'Record',
      taskflow: 'Taskflow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      playbookUuid: 'string',
      record: 'string',
      taskflow: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

