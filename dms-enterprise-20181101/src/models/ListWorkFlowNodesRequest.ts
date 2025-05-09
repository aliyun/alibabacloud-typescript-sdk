// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWorkFlowNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The name that is used to search for approval nodes.
   * 
   * @example
   * admin
   */
  searchName?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > : To view the ID of the tenant, log on to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * -1
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      searchName: 'SearchName',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchName: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

