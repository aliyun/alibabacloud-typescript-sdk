// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSurveyJobDownLoadJobsRequest extends $dara.Model {
  pageNum?: number;
  pageSize?: number;
  sortCol?: string;
  sortType?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      pageNum: 'pageNum',
      pageSize: 'pageSize',
      sortCol: 'sortCol',
      sortType: 'sortType',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNum: 'number',
      pageSize: 'number',
      sortCol: 'string',
      sortType: 'string',
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

