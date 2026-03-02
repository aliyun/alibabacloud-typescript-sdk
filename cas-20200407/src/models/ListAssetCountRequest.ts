// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssetCountRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2020-07-13
   */
  endDate?: number;
  /**
   * @example
   * 1
   */
  showSize?: number;
  /**
   * @example
   * 2018-07-13
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      showSize: 'ShowSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'number',
      showSize: 'number',
      startDate: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

