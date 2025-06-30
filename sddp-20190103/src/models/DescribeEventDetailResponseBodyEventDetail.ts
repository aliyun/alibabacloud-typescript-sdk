// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEventDetailResponseBodyEventDetailChart } from "./DescribeEventDetailResponseBodyEventDetailChart";
import { DescribeEventDetailResponseBodyEventDetailContent } from "./DescribeEventDetailResponseBodyEventDetailContent";
import { DescribeEventDetailResponseBodyEventDetailResourceInfo } from "./DescribeEventDetailResponseBodyEventDetailResourceInfo";


export class DescribeEventDetailResponseBodyEventDetail extends $dara.Model {
  /**
   * @remarks
   * The baseline behavior chart of the anomalous event.
   */
  chart?: DescribeEventDetailResponseBodyEventDetailChart[];
  /**
   * @remarks
   * The content in the anomalous event.
   */
  content?: DescribeEventDetailResponseBodyEventDetailContent[];
  /**
   * @remarks
   * An array that consists of the source from which the information of the anomalous event is recorded.
   */
  resourceInfo?: DescribeEventDetailResponseBodyEventDetailResourceInfo[];
  static names(): { [key: string]: string } {
    return {
      chart: 'Chart',
      content: 'Content',
      resourceInfo: 'ResourceInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chart: { 'type': 'array', 'itemType': DescribeEventDetailResponseBodyEventDetailChart },
      content: { 'type': 'array', 'itemType': DescribeEventDetailResponseBodyEventDetailContent },
      resourceInfo: { 'type': 'array', 'itemType': DescribeEventDetailResponseBodyEventDetailResourceInfo },
    };
  }

  validate() {
    if(Array.isArray(this.chart)) {
      $dara.Model.validateArray(this.chart);
    }
    if(Array.isArray(this.content)) {
      $dara.Model.validateArray(this.content);
    }
    if(Array.isArray(this.resourceInfo)) {
      $dara.Model.validateArray(this.resourceInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

