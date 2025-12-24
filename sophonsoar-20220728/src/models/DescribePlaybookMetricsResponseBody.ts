// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlaybookMetricsResponseBodyMetrics extends $dara.Model {
  /**
   * @remarks
   * The status of the playbook. Valid values:
   * 
   * *   **1**: enabled
   * *   **0**: disabled
   * 
   * @example
   * 1
   */
  active?: number;
  /**
   * @remarks
   * The description of the playbook.
   * 
   * @example
   * This is a playbook for waf processing
   */
  description?: string;
  /**
   * @remarks
   * The name of the playbook.
   * 
   * @example
   * demo name
   */
  displayName?: string;
  /**
   * @remarks
   * The number of the tasks that are created for the playbook and failed to run.
   * 
   * @example
   * 10
   */
  failNum?: number;
  /**
   * @remarks
   * The time when the playbook was created. The value is a 13-digit timestamp.
   * 
   * @example
   * 1655277397000
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The number of historical versions of the playbook.
   * 
   * @example
   * 10
   */
  historyMd5?: number;
  /**
   * @remarks
   * The time when the playbook was last run. The value is a 13-digit timestamp.
   * 
   * @example
   * 1683526277415
   */
  lastRuntime?: number;
  /**
   * @remarks
   * The type of the playbook. Valid values:
   * 
   * *   **preset**: predefined playbook
   * *   **user**: custom playbook
   * 
   * @example
   * user
   */
  ownType?: string;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * @example
   * 0fbc9bdb-9ae3-4ef4-a709-xxxxx
   */
  playbookUuid?: string;
  /**
   * @remarks
   * The number of the tasks that are created for the playbook and were successfully run.
   * 
   * @example
   * 100
   */
  succNum?: number;
  static names(): { [key: string]: string } {
    return {
      active: 'Active',
      description: 'Description',
      displayName: 'DisplayName',
      failNum: 'FailNum',
      gmtCreate: 'GmtCreate',
      historyMd5: 'HistoryMd5',
      lastRuntime: 'LastRuntime',
      ownType: 'OwnType',
      playbookUuid: 'PlaybookUuid',
      succNum: 'SuccNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      active: 'number',
      description: 'string',
      displayName: 'string',
      failNum: 'number',
      gmtCreate: 'number',
      historyMd5: 'number',
      lastRuntime: 'number',
      ownType: 'string',
      playbookUuid: 'string',
      succNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlaybookMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the playbook.
   */
  metrics?: DescribePlaybookMetricsResponseBodyMetrics;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 567D3D0B-2153-5860-BF9A-F9DEED55FB73
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      metrics: 'Metrics',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metrics: DescribePlaybookMetricsResponseBodyMetrics,
      requestId: 'string',
    };
  }

  validate() {
    if(this.metrics && typeof (this.metrics as any).validate === 'function') {
      (this.metrics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

