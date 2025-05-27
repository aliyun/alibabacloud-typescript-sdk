// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDisposeAndPlaybookResponseBodyDataResponseDataPlaybookList extends $dara.Model {
  available?: string;
  /**
   * @remarks
   * The playbook description.
   * 
   * @example
   * WafBlockIP
   */
  description?: string;
  /**
   * @remarks
   * The display name of the playbook.
   * 
   * @example
   * WafBlockIP
   */
  displayName?: string;
  /**
   * @remarks
   * The playbook name, which is the unique identifier of the playbook.
   * 
   * @example
   * kill_process_isolate_file
   */
  name?: string;
  /**
   * @remarks
   * The opcode of the playbook, which corresponds to the opcode of the playbook recommended for entity handling.
   * 
   * @example
   * 7
   */
  opCode?: string;
  /**
   * @remarks
   * Indicates whether quick event handling is selected by default. Valid values:
   * 
   * *   2: Quick event handling is selected.
   * *   1: Quick event handling is displayed but not selected.
   * 
   * @example
   * 2
   */
  opLevel?: string;
  /**
   * @remarks
   * The playbook parameters and the corresponding properties.
   */
  paramConfig?: any[];
  /**
   * @remarks
   * The opcode configuration.
   * 
   * @example
   * {"opCode":"3"}
   */
  taskConfig?: string;
  /**
   * @example
   * kill_process_isolate_file
   */
  uuid?: string;
  /**
   * @remarks
   * Indicates whether the playbook is intended for Web Application Firewall (WAF). Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  wafPlaybook?: boolean;
  static names(): { [key: string]: string } {
    return {
      available: 'Available',
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
      opCode: 'OpCode',
      opLevel: 'OpLevel',
      paramConfig: 'ParamConfig',
      taskConfig: 'TaskConfig',
      uuid: 'Uuid',
      wafPlaybook: 'WafPlaybook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      available: 'string',
      description: 'string',
      displayName: 'string',
      name: 'string',
      opCode: 'string',
      opLevel: 'string',
      paramConfig: { 'type': 'array', 'itemType': 'any' },
      taskConfig: 'string',
      uuid: 'string',
      wafPlaybook: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.paramConfig)) {
      $dara.Model.validateArray(this.paramConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

