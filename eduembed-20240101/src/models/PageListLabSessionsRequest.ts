// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PageListLabSessionsRequest extends $dara.Model {
  finished?: boolean;
  labId?: number;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  ramAccountId?: number;
  static names(): { [key: string]: string } {
    return {
      finished: 'Finished',
      labId: 'LabId',
      page: 'Page',
      pageSize: 'PageSize',
      ramAccountId: 'RamAccountId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finished: 'boolean',
      labId: 'number',
      page: 'number',
      pageSize: 'number',
      ramAccountId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

