// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceHealthRequest extends $dara.Model {
  /**
   * @example
   * 1808078950770264
   */
  cluster?: string;
  /**
   * @example
   * 1
   */
  current?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1725801327754
   */
  end?: number;
  /**
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
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

