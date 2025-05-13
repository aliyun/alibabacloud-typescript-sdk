// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDiagnoseReportResponseBodyResultDiagnoseItems } from "./DescribeDiagnoseReportResponseBodyResultDiagnoseItems";


export class DescribeDiagnoseReportResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 1535745731000
   */
  createTime?: number;
  diagnoseItems?: DescribeDiagnoseReportResponseBodyResultDiagnoseItems[];
  /**
   * @example
   * YELLOW
   */
  health?: string;
  /**
   * @example
   * es-cn-abc
   */
  instanceId?: string;
  /**
   * @example
   * trigger__2020-08-17T17:09:02
   */
  reportId?: string;
  /**
   * @example
   * SUCCESS
   */
  state?: string;
  /**
   * @example
   * SYSTEM
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
      diagnoseItems: { 'type': 'array', 'itemType': DescribeDiagnoseReportResponseBodyResultDiagnoseItems },
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

