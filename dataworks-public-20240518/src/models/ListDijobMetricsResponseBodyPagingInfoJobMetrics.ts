// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDIJobMetricsResponseBodyPagingInfoJobMetricsSeriesList } from "./ListDijobMetricsResponseBodyPagingInfoJobMetricsSeriesList";


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

