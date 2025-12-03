// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeColdStorageResponseBody extends $dara.Model {
  clusterId?: string;
  coldStorageSize?: string;
  coldStorageUsePercent?: string;
  openStatus?: string;
  payType?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      coldStorageSize: 'ColdStorageSize',
      coldStorageUsePercent: 'ColdStorageUsePercent',
      openStatus: 'OpenStatus',
      payType: 'PayType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      coldStorageSize: 'string',
      coldStorageUsePercent: 'string',
      openStatus: 'string',
      payType: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

