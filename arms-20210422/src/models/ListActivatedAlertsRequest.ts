// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListActivatedAlertsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  currentPage?: number;
  filter?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
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

