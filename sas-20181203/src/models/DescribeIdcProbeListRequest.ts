// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIdcProbeListRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the page to return. Default value: 1, which indicates that the first page is returned.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the IDC.
   * 
   * @example
   * 3K IDC
   */
  idcName?: string;
  /**
   * @remarks
   * The maximum number of entries per page when paging. Default value: 20. If you leave this parameter empty, 20 entries are returned per page.
   * > Do not leave PageSize empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The usage status of the probe. Valid values:
   * 
   * - **0**: enabled
   * - **1**: disabled.
   * 
   * @example
   * 0
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      idcName: 'IdcName',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      idcName: 'string',
      pageSize: 'number',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

