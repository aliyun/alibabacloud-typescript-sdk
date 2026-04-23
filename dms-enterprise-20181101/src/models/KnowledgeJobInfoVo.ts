// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KnowledgeJobInfoVO extends $dara.Model {
  createTime?: string;
  creator?: string;
  description?: string;
  endTime?: string;
  jobId?: number;
  knowledgeCnt?: number;
  progress?: number;
  showJobId?: string;
  status?: string;
  supplement?: string;
  tableCnt?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      creator: 'Creator',
      description: 'Description',
      endTime: 'EndTime',
      jobId: 'JobId',
      knowledgeCnt: 'KnowledgeCnt',
      progress: 'Progress',
      showJobId: 'ShowJobId',
      status: 'Status',
      supplement: 'Supplement',
      tableCnt: 'TableCnt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      creator: 'string',
      description: 'string',
      endTime: 'string',
      jobId: 'number',
      knowledgeCnt: 'number',
      progress: 'number',
      showJobId: 'string',
      status: 'string',
      supplement: 'string',
      tableCnt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

