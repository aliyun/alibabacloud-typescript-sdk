// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceHealthRequest extends $dara.Model {
  xDebugId?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * 2dc6f3be-bf24-4070-8d3a-c03c26850532
   */
  cluster?: string;
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * The end time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1725801327754
   */
  end?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  /**
   * @remarks
   * The number of entries per page. Default value: 5. Valid values: 1 to 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 1725797727754
   */
  start?: number;
  xSysomInvokeSource?: string;
  static names(): { [key: string]: string } {
    return {
      xDebugId: 'X-Debug-Id',
      cluster: 'cluster',
      current: 'current',
      end: 'end',
      instance: 'instance',
      pageSize: 'pageSize',
      start: 'start',
      xSysomInvokeSource: 'x-sysom-invoke-source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      xDebugId: 'string',
      cluster: 'string',
      current: 'number',
      end: 'number',
      instance: 'string',
      pageSize: 'number',
      start: 'number',
      xSysomInvokeSource: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

