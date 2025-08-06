// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePlayMetricDataResponseBodyNodes extends $dara.Model {
  x?: string;
  y?: string;
  static names(): { [key: string]: string } {
    return {
      x: 'X',
      y: 'Y',
    };
  }

  static types(): { [key: string]: any } {
    return {
      x: 'string',
      y: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePlayMetricDataResponseBody extends $dara.Model {
  nodes?: DescribePlayMetricDataResponseBodyNodes[];
  requestId?: string;
  summaryData?: string;
  static names(): { [key: string]: string } {
    return {
      nodes: 'Nodes',
      requestId: 'RequestId',
      summaryData: 'SummaryData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nodes: { 'type': 'array', 'itemType': DescribePlayMetricDataResponseBodyNodes },
      requestId: 'string',
      summaryData: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nodes)) {
      $dara.Model.validateArray(this.nodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

