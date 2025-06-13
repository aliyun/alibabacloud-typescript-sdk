// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportScanResultShrinkRequest extends $dara.Model {
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
  queryShrink?: string;
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
  sortShrink?: string;
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
      queryShrink: 'Query',
      regionId: 'RegionId',
      resourceType: 'ResourceType',
      sortShrink: 'Sort',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      endDate: 'string',
      pageSize: 'number',
      queryShrink: 'string',
      regionId: 'string',
      resourceType: 'string',
      sortShrink: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

