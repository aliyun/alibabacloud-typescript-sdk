// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KnowledgeSubJobInfoVO extends $dara.Model {
  errMessage?: string;
  jobType?: string;
  name?: string;
  progress?: number;
  status?: string;
  subJobId?: number;
  static names(): { [key: string]: string } {
    return {
      errMessage: 'ErrMessage',
      jobType: 'JobType',
      name: 'Name',
      progress: 'Progress',
      status: 'Status',
      subJobId: 'SubJobId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMessage: 'string',
      jobType: 'string',
      name: 'string',
      progress: 'number',
      status: 'string',
      subJobId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

