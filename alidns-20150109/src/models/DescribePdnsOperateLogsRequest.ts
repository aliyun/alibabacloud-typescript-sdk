// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePdnsOperateLogsRequest extends $dara.Model {
  actionType?: string;
  endDate?: string;
  keyword?: string;
  lang?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceType?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      endDate: 'EndDate',
      keyword: 'Keyword',
      lang: 'Lang',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceType: 'ResourceType',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      endDate: 'string',
      keyword: 'string',
      lang: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceType: 'string',
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

