// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDiagnoseReportResponseBodyResultDiagnoseItems } from "./ListDiagnoseReportResponseBodyResultDiagnoseItems";


export class ListDiagnoseReportResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The ID of the report.
   * 
   * @example
   * 1535745731000
   */
  createTime?: number;
  /**
   * @remarks
   * The name of the item.
   */
  diagnoseItems?: ListDiagnoseReportResponseBodyResultDiagnoseItems[];
  /**
   * @remarks
   * Reports the list of diagnostic item information.
   * 
   * @example
   * YELLOW
   */
  health?: string;
  /**
   * @remarks
   * The overall health of the cluster in the report. Supported: GREEN, YELLOW, RED, and UNKNOWN.
   * 
   * @example
   * es-cn-abc
   */
  instanceId?: string;
  /**
   * @remarks
   * The diagnosis status. Valid values: Supported: SUCCESS, FAILED, and RUNNING.
   * 
   * @example
   * trigger__2020-08-17T17:09:02f
   */
  reportId?: string;
  /**
   * @remarks
   * The ID of the instance for diagnosis.
   * 
   * @example
   * SUCCESS
   */
  state?: string;
  /**
   * @remarks
   * The timestamp when the report was created.
   * 
   * @example
   * USER
   */
  trigger?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      diagnoseItems: 'diagnoseItems',
      health: 'health',
      instanceId: 'instanceId',
      reportId: 'reportId',
      state: 'state',
      trigger: 'trigger',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      diagnoseItems: { 'type': 'array', 'itemType': ListDiagnoseReportResponseBodyResultDiagnoseItems },
      health: 'string',
      instanceId: 'string',
      reportId: 'string',
      state: 'string',
      trigger: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diagnoseItems)) {
      $dara.Model.validateArray(this.diagnoseItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

