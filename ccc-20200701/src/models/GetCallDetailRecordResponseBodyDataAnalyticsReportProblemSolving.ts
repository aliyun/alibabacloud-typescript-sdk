// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCallDetailRecordResponseBodyDataAnalyticsReportProblemSolving extends $dara.Model {
  problem?: string;
  solution?: string;
  solved?: boolean;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      problem: 'Problem',
      solution: 'Solution',
      solved: 'Solved',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      problem: 'string',
      solution: 'string',
      solved: 'boolean',
      success: 'boolean',
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

