// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPopTrafficStatisticsResponseBodyTrafficDataDatapoints extends $dara.Model {
  /**
   * @example
   * 15325
   */
  average?: number;
  /**
   * @example
   * 2023-12-06 15:29:00
   */
  dateTime?: string;
  static names(): { [key: string]: string } {
    return {
      average: 'Average',
      dateTime: 'DateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      average: 'number',
      dateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPopTrafficStatisticsResponseBodyTrafficData extends $dara.Model {
  datapoints?: ListPopTrafficStatisticsResponseBodyTrafficDataDatapoints[];
  /**
   * @example
   * InternetTx
   */
  metricName?: string;
  static names(): { [key: string]: string } {
    return {
      datapoints: 'Datapoints',
      metricName: 'MetricName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datapoints: { 'type': 'array', 'itemType': ListPopTrafficStatisticsResponseBodyTrafficDataDatapoints },
      metricName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.datapoints)) {
      $dara.Model.validateArray(this.datapoints);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPopTrafficStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EFE7EBB2-449D-5BBB-B381-CA7839BC1649
   */
  requestId?: string;
  trafficData?: ListPopTrafficStatisticsResponseBodyTrafficData[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficData: 'TrafficData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficData: { 'type': 'array', 'itemType': ListPopTrafficStatisticsResponseBodyTrafficData },
    };
  }

  validate() {
    if(Array.isArray(this.trafficData)) {
      $dara.Model.validateArray(this.trafficData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

