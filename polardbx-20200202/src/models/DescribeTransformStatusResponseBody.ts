// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTransformStatusResponseBodyData extends $dara.Model {
  /**
   * @example
   * true
   */
  canCancel?: boolean;
  /**
   * @example
   * true
   */
  canFinish?: boolean;
  canSwitch?: boolean;
  canUndoSwitch?: boolean;
  /**
   * @example
   * pxc-*****
   */
  enterpriseInsName?: string;
  /**
   * @example
   * none
   */
  phase?: string;
  reportSummary?: { [key: string]: any };
  /**
   * @example
   * 2025-09-02 16:52:47.0
   */
  reportTime?: number;
  /**
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

