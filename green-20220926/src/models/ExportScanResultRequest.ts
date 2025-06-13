// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportScanResultRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * 2024-03-11 10:00:00
   */
  endDate?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  query?: { [key: string]: string };
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @example
   * text
   */
  resourceType?: string;
  sort?: { [key: string]: string };
  /**
   * @example
   * 2024-03-10 10:00:00
   */
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      endDate: 'EndDate',
      pageSize: 'PageSize',
      query: 'Query',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      sort: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      pageSize: 'number',
      query: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      regionId: 'string',
      resourceType: 'string',
      sort: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      startDate: 'string',
    };
  }

  validate() {
    if(this.query) {
      $dara.Model.validateMap(this.query);
    }
    if(this.sort) {
      $dara.Model.validateMap(this.sort);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

