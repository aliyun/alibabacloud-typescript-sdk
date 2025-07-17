// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOnCallSchedulesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the scheduling policy.
   * 
   * @example
   * OnCallSchedule_test
   */
  name?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      page: 'Page',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      page: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

