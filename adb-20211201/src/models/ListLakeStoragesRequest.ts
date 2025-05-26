// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLakeStoragesRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-*******
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The filter parameters that you want to use to query lake storages. Specify multiple parameters in an AND relationship. For example, if you want to query lake storage whose names are in the range of i-a123, or i-b123, and in the Stopped state, set this parameter to \\&Filter. 1.Name=InstanceName\\&Filter. 1.Value.1=i-a123\\&Filter.1.Value.2=i-b123\\&Filter.2.Name=Status\\&Filter. 2.Value=Stopped.
   * 
   * @example
   * -
   */
  filter?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      filter: 'Filter',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      filter: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

