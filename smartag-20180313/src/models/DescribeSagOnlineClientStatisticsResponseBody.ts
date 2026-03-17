// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSagOnlineClientStatisticsResponseBodySagStatisticsStatistics extends $dara.Model {
  onlineCount?: string;
  smartAGId?: string;
  static names(): { [key: string]: string } {
    return {
      onlineCount: 'OnlineCount',
      smartAGId: 'SmartAGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      onlineCount: 'string',
      smartAGId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagOnlineClientStatisticsResponseBodySagStatistics extends $dara.Model {
  statistics?: DescribeSagOnlineClientStatisticsResponseBodySagStatisticsStatistics[];
  static names(): { [key: string]: string } {
    return {
      statistics: 'Statistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statistics: { 'type': 'array', 'itemType': DescribeSagOnlineClientStatisticsResponseBodySagStatisticsStatistics },
    };
  }

  validate() {
    if(Array.isArray(this.statistics)) {
      $dara.Model.validateArray(this.statistics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSagOnlineClientStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9EC839B6-0EA5-4F19-A4B7-A9E465D057AE
   */
  requestId?: string;
  sagStatistics?: DescribeSagOnlineClientStatisticsResponseBodySagStatistics;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sagStatistics: 'SagStatistics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sagStatistics: DescribeSagOnlineClientStatisticsResponseBodySagStatistics,
    };
  }

  validate() {
    if(this.sagStatistics && typeof (this.sagStatistics as any).validate === 'function') {
      (this.sagStatistics as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

