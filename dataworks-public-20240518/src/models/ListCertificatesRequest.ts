// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCertificatesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the user who created the certificate files.
   * 
   * @example
   * 1107550004253538
   */
  createUser?: string;
  /**
   * @remarks
   * The time when the certificate file was created. You can call this operation to query the files that are created before the time. Unit: milliseconds.
   * 
   * @example
   * 1593877765000
   */
  endCreateTime?: number;
  /**
   * @remarks
   * The name of the certificate file. Fuzzy match by file name is supported.
   * 
   * @example
   * xm_create_test
   */
  name?: string;
  /**
   * @remarks
   * The order in which you want to sort the certificate files. Valid values: Desc: descending order ASC: ascending order Default value: Asc
   * 
   * @example
   * Asc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the workspace to which the certificate file belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The field used to sort the certificate files. Valid values: CreateTime Id Name Default value: Id
   * 
   * @example
   * Id
   */
  sortBy?: string;
  /**
   * @remarks
   * The time when the certificate file was created. You can call this operation to query the files that are created after the time. Unit: milliseconds.
   * 
   * @example
   * 1730217600000
   */
  startCreateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createUser: 'CreateUser',
      endCreateTime: 'EndCreateTime',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
      startCreateTime: 'StartCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createUser: 'string',
      endCreateTime: 'number',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      sortBy: 'string',
      startCreateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

