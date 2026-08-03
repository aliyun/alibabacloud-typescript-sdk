// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAICoachTaskPageRequest extends $dara.Model {
  endTime?: string;
  pageNumber?: number;
  pageSize?: number;
  startTime?: string;
  status?: string;
  studentId?: string;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      startTime: 'startTime',
      status: 'status',
      studentId: 'studentId',
      taskId: 'taskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      startTime: 'string',
      status: 'string',
      studentId: 'string',
      taskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

