// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeContainerAppsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the container cluster. Note: This parameter is required. If this parameter is not specified, the service returns a 400 error.
   * 
   * @example
   * ca0a686115432429ca26cf780f5e9fff5
   */
  clusterId?: string;
  /**
   * @remarks
   * The page number for a paged query.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The application value to query. Fuzzy match is supported.
   * 
   * @example
   * cas-adad-qeqwe
   */
  fieldValue?: string;
  /**
   * @remarks
   * The maximum number of entries per page for a paged query. Default value: 20. If you leave this parameter empty, 20 entries are returned.
   * > Do not leave PageSize empty.
   * 
   * This parameter is required.
   * 
   * @example
   * 200
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      currentPage: 'CurrentPage',
      fieldValue: 'FieldValue',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      currentPage: 'number',
      fieldValue: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

