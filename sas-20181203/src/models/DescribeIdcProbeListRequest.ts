// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIdcProbeListRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the page number from which to start displaying the query results. The default value is 1, indicating that the display starts from the first page.
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
   * Specifies the maximum number of data entries to display per page in a paginated query. The default number of data entries per page is 20, and if the PageSize parameter is empty, it will default to returning 20 data entries.
   * > It is recommended that the PageSize value is not empty.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Probe status. Values:
   * 
   * - **0**: Enabled
   * - **1**: Disabled
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

