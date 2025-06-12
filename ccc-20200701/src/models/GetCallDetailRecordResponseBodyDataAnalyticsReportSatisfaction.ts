// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCallDetailRecordResponseBodyDataAnalyticsReportSatisfaction extends $dara.Model {
  remark?: string;
  satisfactionDescription?: string;
  success?: boolean;
  taskId?: string;
  static names(): { [key: string]: string } {
    return {
      remark: 'Remark',
      satisfactionDescription: 'SatisfactionDescription',
      success: 'Success',
      taskId: 'TaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remark: 'string',
      satisfactionDescription: 'string',
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

