// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEipMonitorDataResponseBodyEipMonitorDatasEipMonitorData extends $dara.Model {
  eipBandwidth?: number;
  eipFlow?: number;
  eipPackets?: number;
  eipRX?: number;
  eipTX?: number;
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      eipBandwidth: 'EipBandwidth',
      eipFlow: 'EipFlow',
      eipPackets: 'EipPackets',
      eipRX: 'EipRX',
      eipTX: 'EipTX',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipBandwidth: 'number',
      eipFlow: 'number',
      eipPackets: 'number',
      eipRX: 'number',
      eipTX: 'number',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeEipMonitorDataResponseBody extends $dara.Model {
  eipMonitorDatas?: DescribeEipMonitorDataResponseBodyEipMonitorDatas;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eipMonitorDatas: 'EipMonitorDatas',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipMonitorDatas: DescribeEipMonitorDataResponseBodyEipMonitorDatas,
      requestId: 'string',
    };
  }

  validate() {
    if(this.eipMonitorDatas && typeof (this.eipMonitorDatas as any).validate === 'function') {
      (this.eipMonitorDatas as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

