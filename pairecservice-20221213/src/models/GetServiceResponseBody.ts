// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceResponseBodyLatestProdReleaseOrder extends $dara.Model {
  /**
   * @example
   * update golang version to 1.22
   */
  content?: string;
  /**
   * @example
   * 2.0.0
   */
  imageVersion?: string;
  /**
   * @example
   * {
   * 	"Pre": {
   *     "Status": "Released",
   *     "GmtReleasedTime" : "2021-12-15T23:24:33.132+08:00",
   *   },
   *   "Prod": {
   *     "Status": "Released",
   *     "GmtReleasedTime" : "2021-12-15T23:24:33.132+08:00",
   *   }
   * }
   */
  releaseInfo?: string;
  /**
   * @example
   * 3
   */
  releaseOrderId?: string;
  /**
   * @example
   * E-xxx.xxx-@xxx.onaliyun.com
   */
  releaser?: string;
  /**
   * @example
   * update version
   */
  topic?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      imageVersion: 'ImageVersion',
      releaseInfo: 'ReleaseInfo',
      releaseOrderId: 'ReleaseOrderId',
      releaser: 'Releaser',
      topic: 'Topic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      imageVersion: 'string',
      releaseInfo: 'string',
      releaseOrderId: 'string',
      releaser: 'string',
      topic: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetServiceResponseBody extends $dara.Model {
  /**
   * @example
   * this is a test rec engine
   */
  description?: string;
  /**
   * @example
   * 3
   */
  engineConfigId?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtReleasedTime?: string;
  /**
   * @example
   * ********
   */
  imageAuth?: string;
  imageName?: string;
  latestProdReleaseOrder?: GetServiceResponseBodyLatestProdReleaseOrder;
  /**
   * @example
   * test_rec
   */
  name?: string;
  /**
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @example
   * D75C43DC-3D3A-5CC8-9AAC-8C77306C433B
   */
  requestId?: string;
  /**
   * @example
   * {"Port":8080}
   */
  serviceConfig?: string;
  /**
   * @example
   * eas-resource-xxx
   */
  serviceResourceUri?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      engineConfigId: 'EngineConfigId',
      gmtReleasedTime: 'GmtReleasedTime',
      imageAuth: 'ImageAuth',
      imageName: 'ImageName',
      latestProdReleaseOrder: 'LatestProdReleaseOrder',
      name: 'Name',
      region: 'Region',
      requestId: 'RequestId',
      serviceConfig: 'ServiceConfig',
      serviceResourceUri: 'ServiceResourceUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      engineConfigId: 'string',
      gmtReleasedTime: 'string',
      imageAuth: 'string',
      imageName: 'string',
      latestProdReleaseOrder: GetServiceResponseBodyLatestProdReleaseOrder,
      name: 'string',
      region: 'string',
      requestId: 'string',
      serviceConfig: 'string',
      serviceResourceUri: 'string',
    };
  }

  validate() {
    if(this.latestProdReleaseOrder && typeof (this.latestProdReleaseOrder as any).validate === 'function') {
      (this.latestProdReleaseOrder as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

