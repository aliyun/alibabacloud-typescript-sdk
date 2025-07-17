// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListActivatedAlertsRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. Default value: `1`.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The filter condition in the `{"key":"value"}`format. You must specify the `key` and `value` of the filter condition.
   * 
   * @example
   * {"alertname":"Container CPU usage is greater than 80%"}
   */
  filter?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: `10`.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      filter: 'Filter',
      pageSize: 'PageSize',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      filter: 'string',
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

