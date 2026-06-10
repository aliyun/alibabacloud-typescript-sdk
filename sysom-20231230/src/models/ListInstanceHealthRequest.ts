// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceHealthRequest extends $dara.Model {
  /**
   * @remarks
   * cluster ID
   * 
   * @example
   * 2dc6f3be-bf24-4070-8d3a-c03c26850532
   */
  cluster?: string;
  /**
   * @remarks
   * Current page number for paging
   * 
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * End Time
   * 
   * This parameter is required.
   * 
   * @example
   * 1725801327754
   */
  end?: number;
  /**
   * @remarks
   * instance ID.
   * 
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  /**
   * @remarks
   * Page size. Default value is 5. Valid range: [1,100]
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Start Time
   * 
   * This parameter is required.
   * 
   * @example
   * 1725797727754
   */
  start?: number;
  static names(): { [key: string]: string } {
    return {
      cluster: 'cluster',
      current: 'current',
      end: 'end',
      instance: 'instance',
      pageSize: 'pageSize',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      current: 'number',
      end: 'number',
      instance: 'string',
      pageSize: 'number',
      start: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

