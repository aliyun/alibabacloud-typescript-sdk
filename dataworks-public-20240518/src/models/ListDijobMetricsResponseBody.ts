// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDIJobMetricsResponseBodyPagingInfoJobMetricsSeriesList extends $dara.Model {
  /**
   * @remarks
   * The point in time at which data is sampled based on the metric.
   * 
   * @example
   * 1716881141
   */
  time?: number;
  /**
   * @remarks
   * The sample value.
   * 
   * @example
   * 10
   */
  value?: number;
  static names(): { [key: string]: string } {
    return {
      time: 'Time',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      time: 'number',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobMetricsResponseBodyPagingInfoJobMetrics extends $dara.Model {
  /**
   * @remarks
   * The name of the metric.
   * 
   * @example
   * JobDelay
   */
  name?: string;
  /**
   * @remarks
   * The metric data.
   */
  seriesList?: ListDIJobMetricsResponseBodyPagingInfoJobMetricsSeriesList[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      seriesList: 'SeriesList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      seriesList: { 'type': 'array', 'itemType': ListDIJobMetricsResponseBodyPagingInfoJobMetricsSeriesList },
    };
  }

  validate() {
    if(Array.isArray(this.seriesList)) {
      $dara.Model.validateArray(this.seriesList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobMetricsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The metrics returned.
   */
  jobMetrics?: ListDIJobMetricsResponseBodyPagingInfoJobMetrics[];
  static names(): { [key: string]: string } {
    return {
      jobMetrics: 'JobMetrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobMetrics: { 'type': 'array', 'itemType': ListDIJobMetricsResponseBodyPagingInfoJobMetrics },
    };
  }

  validate() {
    if(Array.isArray(this.jobMetrics)) {
      $dara.Model.validateArray(this.jobMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIJobMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pagingInfo?: ListDIJobMetricsResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 691CA452-D37A-4ED0-9441
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListDIJobMetricsResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

