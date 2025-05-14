// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInstancesResponseBodyDataActionExecutor } from "./GetInstancesResponseBodyDataActionExecutor";
import { GetInstancesResponseBodyDataOriginator } from "./GetInstancesResponseBodyDataOriginator";


export class GetInstancesResponseBodyData extends $dara.Model {
  actionExecutor?: GetInstancesResponseBodyDataActionExecutor[];
  /**
   * @example
   * agree
   */
  approvedResult?: string;
  /**
   * @example
   * 2021-05-01
   */
  createTimeGMT?: string;
  data?: { [key: string]: any };
  /**
   * @example
   * FORM-EF6Y4G8WO2FN0SUB43TDQ3CGC3FMFQ1G9400RCJ3
   */
  formUuid?: string;
  /**
   * @example
   * RUNNING
   */
  instanceStatus?: string;
  /**
   * @example
   * 2021-05-01
   */
  modifiedTimeGMT?: string;
  originator?: GetInstancesResponseBodyDataOriginator;
  /**
   * @example
   * TPROC--X1Gxxx
   */
  processCode?: string;
  /**
   * @example
   * f30233fb-72e1-4af4-8cb8-c7e0ea9ee530
   */
  processInstanceId?: string;
  /**
   * @example
   * 小红发起的请购单
   */
  title?: string;
  /**
   * @example
   * 1.0
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      actionExecutor: 'ActionExecutor',
      approvedResult: 'ApprovedResult',
      createTimeGMT: 'CreateTimeGMT',
      data: 'Data',
      formUuid: 'FormUuid',
      instanceStatus: 'InstanceStatus',
      modifiedTimeGMT: 'ModifiedTimeGMT',
      originator: 'Originator',
      processCode: 'ProcessCode',
      processInstanceId: 'ProcessInstanceId',
      title: 'Title',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionExecutor: { 'type': 'array', 'itemType': GetInstancesResponseBodyDataActionExecutor },
      approvedResult: 'string',
      createTimeGMT: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      formUuid: 'string',
      instanceStatus: 'string',
      modifiedTimeGMT: 'string',
      originator: GetInstancesResponseBodyDataOriginator,
      processCode: 'string',
      processInstanceId: 'string',
      title: 'string',
      version: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.actionExecutor)) {
      $dara.Model.validateArray(this.actionExecutor);
    }
    if(this.data) {
      $dara.Model.validateMap(this.data);
    }
    if(this.originator && typeof (this.originator as any).validate === 'function') {
      (this.originator as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

