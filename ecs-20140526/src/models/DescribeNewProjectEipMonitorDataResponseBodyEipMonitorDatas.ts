// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeNewProjectEipMonitorDataResponseBodyEipMonitorDatasEipMonitorData } from "./DescribeNewProjectEipMonitorDataResponseBodyEipMonitorDatasEipMonitorData";


export class DescribeNewProjectEipMonitorDataResponseBodyEipMonitorDatas extends $dara.Model {
  eipMonitorData?: DescribeNewProjectEipMonitorDataResponseBodyEipMonitorDatasEipMonitorData[];
  static names(): { [key: string]: string } {
    return {
      eipMonitorData: 'EipMonitorData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipMonitorData: { 'type': 'array', 'itemType': DescribeNewProjectEipMonitorDataResponseBodyEipMonitorDatasEipMonitorData },
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

