// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConvertPlaybookRequest extends $dara.Model {
  /**
   * @remarks
   * Language type for request and response messages. Values:
   * 
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * User ID for the administrator to switch to another member\\"s perspective.
   * 
   * @example
   * 13760*****718726
   */
  roleFor?: number;
  /**
   * @remarks
   * View type. Values:
   * 
   * - 0: Current Alibaba Cloud account view.
   * - 1: View for all accounts under the enterprise.
   * 
   * @example
   * 0
   */
  roleType?: string;
  /**
   * @remarks
   * XML configuration information for playbook orchestration.
   * 
   * This parameter is required.
   * 
   * @example
   * <?xml version=\\"1.0\\" encoding=\\"UTF-8\\"?>
   * <bpmn:definitions xmlns:xsi=\\"http://www.w3.org/2001/XMLSchema-instance\\" xmlns:bpmn=\\"http://www.omg.org/spec/BPMN/20100524/MODEL\\" xmlns:bpmndi=\\"http://www.omg.org/spec/BPMN/20100524/DI\\" xmlns:dc=\\"http://www.omg.org/spec/DD/20100524/DC\\" id=\\"Definitions_1\\" targetNamespace=\\"http://bpmn.io/schema/bpmn\\">
   *   <bpmn:process id=\\"Process_1\\" isExecutable=\\"false\\">
   *     <bpmn:startEvent id=\\"StartEvent_1\\" />
   *   </bpmn:process>
   *   <bpmndi:BPMNDiagram id=\\"BPMNDiagram_1\\">
   *      <bpmndi:BPMNPlane id=\\"BPMNPlane_1\\" bpmnElement=\\"Process_1\\">
   *            <bpmndi:BPMNShape id=\\"_BPMNShape_StartEvent_2\\" bpmnElement=\\"StartEvent_1\\">
   *                    <dc:Bounds x=\\"173\\" y=\\"102\\" width=\\"36\\" height=\\"36\\" />
   *             </bpmndi:BPMNShape>
   *      </bpmndi:BPMNPlane>
   *   </bpmndi:BPMNDiagram>
   * </bpmn:definitions>
   */
  taskflow?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      roleFor: 'RoleFor',
      roleType: 'RoleType',
      taskflow: 'Taskflow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      roleFor: 'number',
      roleType: 'string',
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

