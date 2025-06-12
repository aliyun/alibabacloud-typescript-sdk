// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCallDetailRecordsV2ResponseBodyDataListAnalyticsReportEmotion extends $dara.Model {
  confidence?: number;
  remark?: string;
  success?: boolean;
  taskId?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      confidence: 'Confidence',
      remark: 'Remark',
      success: 'Success',
      taskId: 'TaskId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      confidence: 'number',
      remark: 'string',
      success: 'boolean',
      taskId: 'string',
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

