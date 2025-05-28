// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The filter condition that is used to query instances. If you do not configure this parameter, all instances are queried.
   * 
   * @example
   * rmq-cn-7e22ody****
   */
  filter?: string;
  /**
   * @remarks
   * The page number.
   * 
   * Valid values: 1 to 100000000.
   * 
   * If you set this parameter to a value smaller than 1, the system uses 1 as the value. If you set this parameter to a value greater than 100000000, the system uses 100000000 as the value.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * Value values: 10 to 200.
   * 
   * If you set this parameter to a value smaller than 10, the system uses 10 as the value. If you set this parameter to a value greater than 200, the system uses 200 as the value.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-acfmx7caj******
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The primary edition of the instance.
   * 
   * Valid values:
   * 
   * *   standard: Standard Edition
   * *   ultimate: Enterprise Platinum Edition
   * *   professional: Professional Edition
   */
  seriesCodesShrink?: string;
  /**
   * @remarks
   * The storage encryption key.
   * 
   * @example
   * xxxxx
   */
  storageSecretKey?: string;
  /**
   * @remarks
   * The tags that are used to filter instances.
   * 
   * @example
   * [{"key": "rmq-test", "value": "test"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'filter',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupId: 'resourceGroupId',
      seriesCodesShrink: 'seriesCodes',
      storageSecretKey: 'storageSecretKey',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
      seriesCodesShrink: 'string',
      storageSecretKey: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

