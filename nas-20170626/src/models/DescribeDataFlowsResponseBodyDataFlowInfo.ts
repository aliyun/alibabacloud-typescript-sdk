// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDataFlowsResponseBodyDataFlowInfoDataFlow } from "./DescribeDataFlowsResponseBodyDataFlowInfoDataFlow";


export class DescribeDataFlowsResponseBodyDataFlowInfo extends $dara.Model {
  dataFlow?: DescribeDataFlowsResponseBodyDataFlowInfoDataFlow[];
  static names(): { [key: string]: string } {
    return {
      dataFlow: 'DataFlow',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataFlow: { 'type': 'array', 'itemType': DescribeDataFlowsResponseBodyDataFlowInfoDataFlow },
    };
  }

  validate() {
    if(Array.isArray(this.dataFlow)) {
      $dara.Model.validateArray(this.dataFlow);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

