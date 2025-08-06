// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDailyAsyncJobResponseBodyDailyJobList extends $dara.Model {
  date?: string;
  jobCount?: number;
  static names(): { [key: string]: string } {
    return {
      date: 'Date',
      jobCount: 'JobCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      date: 'string',
      jobCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDailyAsyncJobResponseBody extends $dara.Model {
  dailyJobList?: DescribeDailyAsyncJobResponseBodyDailyJobList[];
  jobType?: string;
  requestId?: string;
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dailyJobList: 'DailyJobList',
      jobType: 'JobType',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dailyJobList: { 'type': 'array', 'itemType': DescribeDailyAsyncJobResponseBodyDailyJobList },
      jobType: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dailyJobList)) {
      $dara.Model.validateArray(this.dailyJobList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

