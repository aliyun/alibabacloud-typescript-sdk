// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSoftwaresRequestOsInfos } from "./ListSoftwaresRequestOsInfos";


export class ListSoftwaresRequest extends $dara.Model {
  /**
   * @remarks
   * The application category.
   * 
   * @example
   * NWP
   */
  category?: string;
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * ehpc-hz-FYUr32****
   */
  clusterId?: string;
  /**
   * @remarks
   * The software name.
   * 
   * @example
   * gromacs
   */
  name?: string;
  /**
   * @remarks
   * The operating system (OS) information.
   */
  osInfos?: ListSoftwaresRequestOsInfos[];
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      clusterId: 'ClusterId',
      name: 'Name',
      osInfos: 'OsInfos',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      clusterId: 'string',
      name: 'string',
      osInfos: { 'type': 'array', 'itemType': ListSoftwaresRequestOsInfos },
      pageNumber: 'string',
      pageSize: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.osInfos)) {
      $dara.Model.validateArray(this.osInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

