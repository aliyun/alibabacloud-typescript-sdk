// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchAlertRulesRequest extends $dara.Model {
  appType?: string;
  currentPage?: number;
  pageSize?: number;
  pid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  title?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      appType: 'AppType',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      pid: 'Pid',
      regionId: 'RegionId',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      currentPage: 'number',
      pageSize: 'number',
      pid: 'string',
      regionId: 'string',
      title: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

