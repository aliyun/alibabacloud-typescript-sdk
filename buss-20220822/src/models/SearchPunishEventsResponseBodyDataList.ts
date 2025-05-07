// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchPunishEventsResponseBodyDataList extends $dara.Model {
  bussinessCode?: string;
  caseCode?: string;
  recordsCount?: number;
  resourceId?: string;
  tipsCode?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bussinessCode: 'BussinessCode',
      caseCode: 'CaseCode',
      recordsCount: 'RecordsCount',
      resourceId: 'ResourceId',
      tipsCode: 'TipsCode',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bussinessCode: 'string',
      caseCode: 'string',
      recordsCount: 'number',
      resourceId: 'string',
      tipsCode: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

