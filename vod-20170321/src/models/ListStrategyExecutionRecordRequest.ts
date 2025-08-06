// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListStrategyExecutionRecordRequest extends $dara.Model {
  endTime?: string;
  mediaId?: string;
  pageNo?: number;
  pageSize?: number;
  startTime?: string;
  status?: string;
  strategyId?: string;
  strategyType?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      mediaId: 'MediaId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      startTime: 'StartTime',
      status: 'Status',
      strategyId: 'StrategyId',
      strategyType: 'StrategyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      mediaId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      startTime: 'string',
      status: 'string',
      strategyId: 'string',
      strategyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

