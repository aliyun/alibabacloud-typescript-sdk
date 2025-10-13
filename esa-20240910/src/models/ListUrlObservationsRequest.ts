// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUrlObservationsRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration ID,
   * 
   * @example
   * 35281609698****
   */
  configId?: number;
  /**
   * @remarks
   * The page number. Page starts from page 1. Default value: 1
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **500**. Valid values: **1 to 500**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The website ID, which can be obtained by calling the [ListSites](https://help.aliyun.com/document_detail/2850189.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 34003500310****
   */
  siteId?: number;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      siteId: 'SiteId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      siteId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

