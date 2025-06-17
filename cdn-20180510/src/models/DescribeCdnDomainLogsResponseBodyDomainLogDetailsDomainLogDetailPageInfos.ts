// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnDomainLogsResponseBodyDomainLogDetailsDomainLogDetailPageInfos extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 20
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageIndex: 'number',
      pageSize: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

