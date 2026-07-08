// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssetCountRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The expiration date of the certificate.
   * 
   * @example
   * 2020-07-13
   */
  endDate?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 50.
   * 
   * @example
   * 1
   */
  showSize?: number;
  /**
   * @remarks
   * The date of certificate issuance.
   * 
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

