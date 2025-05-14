// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInstancesByIdListResponseBodyResultActionExecutor } from "./GetInstancesByIdListResponseBodyResultActionExecutor";
import { GetInstancesByIdListResponseBodyResultOriginator } from "./GetInstancesByIdListResponseBodyResultOriginator";


export class GetInstancesByIdListResponseBodyResult extends $dara.Model {
  actionExecutor?: GetInstancesByIdListResponseBodyResultActionExecutor[];
  /**
   * @example
   * agree
   */
  approvedResult?: string;
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
  originator?: GetInstancesByIdListResponseBodyResultOriginator;
  /**
   * @example
   * TPROC--X1Gxxx
   */
  processCode?: string;
  /**
   * @example
   * f30233fb-72e1-4xxx
   */
  processInstanceId?: string;
  /**
   * @example
   * 李四发起的请购单
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      actionExecutor: 'ActionExecutor',
      approvedResult: 'ApprovedResult',
      data: 'Data',
      formUuid: 'FormUuid',
      instanceStatus: 'InstanceStatus',
      originator: 'Originator',
      processCode: 'ProcessCode',
      processInstanceId: 'ProcessInstanceId',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionExecutor: { 'type': 'array', 'itemType': GetInstancesByIdListResponseBodyResultActionExecutor },
      approvedResult: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      formUuid: 'string',
      instanceStatus: 'string',
      originator: GetInstancesByIdListResponseBodyResultOriginator,
      processCode: 'string',
      processInstanceId: 'string',
      title: 'string',
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

