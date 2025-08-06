// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOSSStatisResponseBodyOssStatisListOSSMetric extends $dara.Model {
  statTime?: string;
  statTimeUTC?: string;
  storageUtilization?: number;
  static names(): { [key: string]: string } {
    return {
      statTime: 'StatTime',
      statTimeUTC: 'StatTimeUTC',
      storageUtilization: 'StorageUtilization',
    };
  }

  static types(): { [key: string]: any } {
    return {
      statTime: 'string',
      statTimeUTC: 'string',
      storageUtilization: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOSSStatisResponseBodyOssStatisList extends $dara.Model {
  OSSMetric?: GetOSSStatisResponseBodyOssStatisListOSSMetric[];
  static names(): { [key: string]: string } {
    return {
      OSSMetric: 'OSSMetric',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OSSMetric: { 'type': 'array', 'itemType': GetOSSStatisResponseBodyOssStatisListOSSMetric },
    };
  }

  validate() {
    if(Array.isArray(this.OSSMetric)) {
      $dara.Model.validateArray(this.OSSMetric);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOSSStatisResponseBody extends $dara.Model {
  maxStorageUtilization?: number;
  ossStatisList?: GetOSSStatisResponseBodyOssStatisList;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      maxStorageUtilization: 'MaxStorageUtilization',
      ossStatisList: 'OssStatisList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxStorageUtilization: 'number',
      ossStatisList: GetOSSStatisResponseBodyOssStatisList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.ossStatisList && typeof (this.ossStatisList as any).validate === 'function') {
      (this.ossStatisList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

