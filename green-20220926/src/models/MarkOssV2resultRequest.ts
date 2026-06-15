// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MarkOssV2ResultRequest extends $dara.Model {
  endDate?: string;
  freezeType?: string;
  operation?: string;
  requestIds?: string;
  startDate?: string;
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      freezeType: 'FreezeType',
      operation: 'Operation',
      requestIds: 'RequestIds',
      startDate: 'StartDate',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      freezeType: 'string',
      operation: 'string',
      requestIds: 'string',
      startDate: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

