// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetInstanceByIdResponseBodyActionExecutor } from "./GetInstanceByIdResponseBodyActionExecutor";
import { GetInstanceByIdResponseBodyOriginator } from "./GetInstanceByIdResponseBodyOriginator";


export class GetInstanceByIdResponseBody extends $dara.Model {
  actionExecutor?: GetInstanceByIdResponseBodyActionExecutor[];
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
   * FORM-EF6Y4xxx
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
  originator?: GetInstanceByIdResponseBodyOriginator;
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
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 李四发起的请购单
   */
  title?: string;
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
  /**
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      actionExecutor: 'actionExecutor',
      approvedResult: 'approvedResult',
      createTimeGMT: 'createTimeGMT',
      data: 'data',
      formUuid: 'formUuid',
      instanceStatus: 'instanceStatus',
      modifiedTimeGMT: 'modifiedTimeGMT',
      originator: 'originator',
      processCode: 'processCode',
      processInstanceId: 'processInstanceId',
      requestId: 'requestId',
      title: 'title',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionExecutor: { 'type': 'array', 'itemType': GetInstanceByIdResponseBodyActionExecutor },
      approvedResult: 'string',
      createTimeGMT: 'string',
      data: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      formUuid: 'string',
      instanceStatus: 'string',
      modifiedTimeGMT: 'string',
      originator: GetInstanceByIdResponseBodyOriginator,
      processCode: 'string',
      processInstanceId: 'string',
      requestId: 'string',
      title: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
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

