// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetProcessDefinitionResponseBodyOriginator } from "./GetProcessDefinitionResponseBodyOriginator";
import { GetProcessDefinitionResponseBodyOwners } from "./GetProcessDefinitionResponseBodyOwners";
import { GetProcessDefinitionResponseBodyTasks } from "./GetProcessDefinitionResponseBodyTasks";


export class GetProcessDefinitionResponseBody extends $dara.Model {
  /**
   * @example
   * FORM-EF6Y4xxx
   */
  formUuid?: string;
  originator?: GetProcessDefinitionResponseBodyOriginator;
  /**
   * @example
   * agree
   */
  outResult?: string;
  owners?: GetProcessDefinitionResponseBodyOwners[];
  /**
   * @example
   * proc-123
   */
  processId?: string;
  /**
   * @example
   * f30233fb-72e1-4xxx
   */
  processInstanceId?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * running
   */
  status?: string;
  tasks?: GetProcessDefinitionResponseBodyTasks[];
  /**
   * @example
   * 李四发起的请购单
   */
  title?: string;
  variables?: { [key: string]: any };
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      formUuid: 'formUuid',
      originator: 'originator',
      outResult: 'outResult',
      owners: 'owners',
      processId: 'processId',
      processInstanceId: 'processInstanceId',
      requestId: 'requestId',
      status: 'status',
      tasks: 'tasks',
      title: 'title',
      variables: 'variables',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      formUuid: 'string',
      originator: GetProcessDefinitionResponseBodyOriginator,
      outResult: 'string',
      owners: { 'type': 'array', 'itemType': GetProcessDefinitionResponseBodyOwners },
      processId: 'string',
      processInstanceId: 'string',
      requestId: 'string',
      status: 'string',
      tasks: { 'type': 'array', 'itemType': GetProcessDefinitionResponseBodyTasks },
      title: 'string',
      variables: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(this.originator && typeof (this.originator as any).validate === 'function') {
      (this.originator as any).validate();
    }
    if(Array.isArray(this.owners)) {
      $dara.Model.validateArray(this.owners);
    }
    if(Array.isArray(this.tasks)) {
      $dara.Model.validateArray(this.tasks);
    }
    if(this.variables) {
      $dara.Model.validateMap(this.variables);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

