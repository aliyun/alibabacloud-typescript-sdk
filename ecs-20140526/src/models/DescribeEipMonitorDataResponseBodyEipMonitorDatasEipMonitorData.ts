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

