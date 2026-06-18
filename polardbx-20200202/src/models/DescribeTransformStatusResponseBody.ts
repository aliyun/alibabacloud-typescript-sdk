// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTransformStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the task can be canceled.
   * 
   * @example
   * true
   */
  canCancel?: boolean;
  /**
   * @remarks
   * Indicates whether the current task is completed.
   * 
   * @example
   * true
   */
  canFinish?: boolean;
  /**
   * @remarks
   * Indicates whether the migration switchover can be performed. Valid values:
   * - **true**: The migration switchover can be performed.
   * - **false**: The migration switchover cannot be performed.
   * 
   * > This parameter is used by the one-click upgrade feature of PolarDB.
   */
  canSwitch?: boolean;
  /**
   * @remarks
   * Indicates whether the switchover operation can be reverted.
   */
  canUndoSwitch?: boolean;
  /**
   * @remarks
   * The Enterprise Edition instance name.
   * 
   * @example
   * pxc-*****
   */
  enterpriseInsName?: string;
  /**
   * @remarks
   * The current migration or upgrade phase.
   * 
   * @example
   * none
   */
  phase?: string;
  /**
   * @remarks
   * The report summary.
   */
  reportSummary?: { [key: string]: any };
  /**
   * @remarks
   * The date when the data report was generated.
   * 
   * @example
   * 2025-09-02 16:52:47.0
   */
  reportTime?: number;
  /**
   * @remarks
   * The standard instance name.
   * 
   * @example
   * pxc-*****
   */
  standardInsName?: string;
  static names(): { [key: string]: string } {
    return {
      canCancel: 'CanCancel',
      canFinish: 'CanFinish',
      canSwitch: 'CanSwitch',
      canUndoSwitch: 'CanUndoSwitch',
      enterpriseInsName: 'EnterpriseInsName',
      phase: 'Phase',
      reportSummary: 'ReportSummary',
      reportTime: 'ReportTime',
      standardInsName: 'StandardInsName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canCancel: 'boolean',
      canFinish: 'boolean',
      canSwitch: 'boolean',
      canUndoSwitch: 'boolean',
      enterpriseInsName: 'string',
      phase: 'string',
      reportSummary: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      reportTime: 'number',
      standardInsName: 'string',
    };
  }

  validate() {
    if(this.reportSummary) {
      $dara.Model.validateMap(this.reportSummary);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeTransformStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The monitoring data.
   */
  data?: DescribeTransformStatusResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 173CA69A-3513-591D-8A09-C1EA37CBE2D9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeTransformStatusResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

