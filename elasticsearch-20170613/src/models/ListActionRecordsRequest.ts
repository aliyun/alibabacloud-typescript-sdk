// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListActionRecordsRequest extends $dara.Model {
  actionNames?: string;
  endTime?: number;
  filter?: string;
  page?: number;
  requestId?: string;
  size?: number;
  startTime?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      actionNames: 'actionNames',
      endTime: 'endTime',
      filter: 'filter',
      page: 'page',
      requestId: 'requestId',
      size: 'size',
      startTime: 'startTime',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionNames: 'string',
      endTime: 'number',
      filter: 'string',
      page: 'number',
      requestId: 'string',
      size: 'number',
      startTime: 'number',
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

