// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEipMonitorDataResponseBodyEipMonitorDatasEipMonitorData } from "./DescribeEipMonitorDataResponseBodyEipMonitorDatasEipMonitorData";


export class DescribeEipMonitorDataResponseBodyEipMonitorDatas extends $dara.Model {
  eipMonitorData?: DescribeEipMonitorDataResponseBodyEipMonitorDatasEipMonitorData[];
  static names(): { [key: string]: string } {
    return {
      eipMonitorData: 'EipMonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipMonitorData: { 'type': 'array', 'itemType': DescribeEipMonitorDataResponseBodyEipMonitorDatasEipMonitorData },
    };
  }

  validate() {
    if(Array.isArray(this.eipMonitorData)) {
      $dara.Model.validateArray(this.eipMonitorData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

