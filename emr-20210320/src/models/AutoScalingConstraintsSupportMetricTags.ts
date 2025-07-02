// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Tag } from "./Tag";


export class AutoScalingConstraintsSupportMetricTags extends $dara.Model {
  /**
   * @remarks
   * 指标名称。
   */
  metricName?: string;
  /**
   * @remarks
   * 指标Tag。
   */
  tags?: Tag[];
  static names(): { [key: string]: string } {
    return {
      metricName: 'MetricName',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metricName: 'string',
      tags: { 'type': 'array', 'itemType': Tag },
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

