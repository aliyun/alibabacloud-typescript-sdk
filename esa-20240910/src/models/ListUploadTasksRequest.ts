// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUploadTasksRequest extends $dara.Model {
  endTime?: string;
  siteId?: number;
  startTime?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      siteId: 'SiteId',
      startTime: 'StartTime',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      siteId: 'number',
      startTime: 'string',
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

