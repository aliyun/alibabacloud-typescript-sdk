// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebLockFileEventsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Specifies whether the event on web tamper proofing is handled. Valid values:
   * 
   * *   **n**: The event on web tamper proofing is handled.
   * *   **y**: The event on web tamper proofing is not handled.
   * 
   * @example
   * n
   */
  dealed?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: **10**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The name of the process.
   * 
   * @example
   * sys_create
   */
  processName?: string;
  /**
   * @remarks
   * The name of the asset.
   * 
   * > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the names of assets.
   * 
   * @example
   * test-ecs
   */
  remark?: string;
  /**
   * @remarks
   * The beginning of the time range to query. The value is a UNIX timestamp.
   * 
   * @example
   * 1660649981419
   */
  tsBegin?: number;
  /**
   * @remarks
   * The end of the time range to query. The value is a UNIX timestamp.
   * 
   * @example
   * 1660649981419
   */
  tsEnd?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      dealed: 'Dealed',
      pageSize: 'PageSize',
      processName: 'ProcessName',
      remark: 'Remark',
      tsBegin: 'TsBegin',
      tsEnd: 'TsEnd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      dealed: 'string',
      pageSize: 'number',
      processName: 'string',
      remark: 'string',
      tsBegin: 'number',
      tsEnd: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

