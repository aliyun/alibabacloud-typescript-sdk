// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSmartAccessGatewayVersionsResponseBodySmartAGVersionsSmartAGVersion extends $dara.Model {
  createTime?: number;
  type?: string;
  versionCode?: string;
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      type: 'Type',
      versionCode: 'VersionCode',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      type: 'string',
      versionCode: 'string',
      versionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayVersionsResponseBodySmartAGVersions extends $dara.Model {
  smartAGVersion?: DescribeSmartAccessGatewayVersionsResponseBodySmartAGVersionsSmartAGVersion[];
  static names(): { [key: string]: string } {
    return {
      smartAGVersion: 'SmartAGVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      smartAGVersion: { 'type': 'array', 'itemType': DescribeSmartAccessGatewayVersionsResponseBodySmartAGVersionsSmartAGVersion },
    };
  }

  validate() {
    if(Array.isArray(this.smartAGVersion)) {
      $dara.Model.validateArray(this.smartAGVersion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSmartAccessGatewayVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 765AB188-69BF-47C6-BEDD-B9FC72BFBB0
   */
  requestId?: string;
  smartAGVersions?: DescribeSmartAccessGatewayVersionsResponseBodySmartAGVersions;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      smartAGVersions: 'SmartAGVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      smartAGVersions: DescribeSmartAccessGatewayVersionsResponseBodySmartAGVersions,
    };
  }

  validate() {
    if(this.smartAGVersions && typeof (this.smartAGVersions as any).validate === 'function') {
      (this.smartAGVersions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

