// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirusScanMachineRequest extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries to return on each page in a paging query.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The asset information to query. You can set this parameter to an asset name or IP address.
   * 
   * @example
   * 192.168.1****
   */
  remark?: string;
  /**
   * @remarks
   * The UUID of the asset instance.
   * 
   * @example
   * 7cc91747-2845-40d4-bb69-c077597f****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      remark: 'Remark',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      remark: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

