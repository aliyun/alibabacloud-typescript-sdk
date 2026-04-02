// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTempFilesRequest extends $dara.Model {
  /**
   * @example
   * /
   */
  delimiter?: string;
  /**
   * @example
   * dsw-730xxxxxxxxxx
   */
  instanceId?: string;
  /**
   * @example
   * filename
   */
  name?: string;
  /**
   * @example
   * DESC
   */
  order?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * somedir/
   */
  prefix?: string;
  /**
   * @example
   * GmtModifiedTime
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      delimiter: 'Delimiter',
      instanceId: 'InstanceId',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      prefix: 'Prefix',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delimiter: 'string',
      instanceId: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      prefix: 'string',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

