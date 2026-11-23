// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MosQueryRegistrationInfoRequest extends $dara.Model {
  activityId?: string;
  checkinStatus?: string;
  keyword?: string;
  page?: string;
  pageSize?: string;
  qrCode?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      checkinStatus: 'CheckinStatus',
      keyword: 'Keyword',
      page: 'Page',
      pageSize: 'PageSize',
      qrCode: 'QrCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      checkinStatus: 'string',
      keyword: 'string',
      page: 'string',
      pageSize: 'string',
      qrCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

