// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIdcProbeListRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the page number of the page to return. Default value: 1.
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
   * Specifies the maximum number of entries to return on each page for a paging query. The default number of entries per page is 20. If the PageSize parameter is left empty, 20 entries are returned by default.
   * > Specify a value for the PageSize parameter.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The status of the probe. Valid values:
   * 
   * - **0**: Enabled.
   * - **1**: Disabled.
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

