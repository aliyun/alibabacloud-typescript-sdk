// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDBClusterPerformanceResponseBodyPerformancesSeries extends $dara.Model {
  /**
   * @remarks
   * The name of the performance metric value. For more information about the performance metrics, see [Metric overview](https://help.aliyun.com/document_detail/2863211.html).
   * 
   * @example
   * AnalyticDB_Storage_CPU_Avg_Usage_Percentage
   */
  name?: string;
  /**
   * @remarks
   * The tags that are added to the cluster.
   * 
   * @example
   * {instance_name: "am-***"}
   */
  tags?: string;
  translateKey?: string;
  /**
   * @remarks
   * The values of the performance metric at different points in time.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      tags: 'Tags',
      translateKey: 'TranslateKey',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      tags: 'string',
      translateKey: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

