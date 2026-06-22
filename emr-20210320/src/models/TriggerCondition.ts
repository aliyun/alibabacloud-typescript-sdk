// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Tag } from "./Tag";


export class TriggerCondition extends $dara.Model {
  /**
   * @remarks
   * The comparison operator. This parameter is required. Valid values:
   * 
   * *   EQ: equal to
   * *   NE: not equal to
   * *   GT: greater than
   * *   LT: less than
   * *   GE: greater than or equal to
   * *   LE: less than or equal to
   * 
   * This parameter is required.
   * 
   * @example
   * LT
   */
  comparisonOperator?: string;
  /**
   * @remarks
   * The name of the metric. This parameter is required and cannot be an empty string. You can view the metric name in [Add Auto Scaling Rules](https://help.aliyun.com/document_detail/445658.html).
   * 
   * This parameter is required.
   * 
   * @example
   * yarn_resourcemanager_queue_PendingVCores
   */
  metricName?: string;
  /**
   * @remarks
   * The name of the statistic. This parameter is required. Valid values:
   * 
   * *   MAX
   * *   MIN
   * *   AVG
   * 
   * This parameter is required.
   * 
   * @example
   * AVG
   */
  statistics?: string;
  /**
   * @remarks
   * The tags for the metrics of a partition. This parameter is available for only metrics that contain ByPartition. For other metrics, leave this parameter empty.
   */
  tags?: Tag[];
  /**
   * @remarks
   * The trigger threshold. This parameter is required.
   * 
   * This parameter is required.
   * 
   * @example
   * 12.5
   */
  threshold?: number;
  static names(): { [key: string]: string } {
    return {
      comparisonOperator: 'ComparisonOperator',
      metricName: 'MetricName',
      statistics: 'Statistics',
      tags: 'Tags',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comparisonOperator: 'string',
      metricName: 'string',
      statistics: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
      threshold: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

