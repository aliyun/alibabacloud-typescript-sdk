// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceResponseBodyLatestProdReleaseOrder extends $dara.Model {
  /**
   * @remarks
   * The release content.
   * 
   * @example
   * update golang version to 1.22
   */
  content?: string;
  /**
   * @remarks
   * The image version.
   * 
   * @example
   * 2.0.0
   */
  imageVersion?: string;
  /**
   * @remarks
   * The release information.
   * 
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
   * @remarks
   * The release order ID.
   * 
   * @example
   * 3
   */
  releaseOrderId?: string;
  /**
   * @remarks
   * The publisher, including the name and UID of the Resource Access Management (RAM) users.
   * 
   * @example
   * E-xxx.xxx-@xxx.onaliyun.com
   */
  releaser?: string;
  /**
   * @remarks
   * The release title.
   * 
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
   * @remarks
   * The Container Registry Enterprise instance ID selected by the user when a non-official image is used.
   * 
   * @example
   * cri-xxx
   */
  crInstanceId?: string;
  /**
   * @remarks
   * The service description.
   * 
   * @example
   * this is a test rec engine
   */
  description?: string;
  /**
   * @remarks
   * The engine configuration ID.
   * 
   * @example
   * 3
   */
  engineConfigId?: string;
  /**
   * @remarks
   * The time of the most recent production release.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtReleasedTime?: string;
  /**
   * @remarks
   * The image secret.
   * 
   * @example
   * ********
   */
  imageAuth?: string;
  /**
   * @remarks
   * The image name.
   */
  imageName?: string;
  /**
   * @remarks
   * The most recent production release record.
   */
  latestProdReleaseOrder?: GetServiceResponseBodyLatestProdReleaseOrder;
  /**
   * @remarks
   * The service name.
   * 
   * @example
   * test_rec
   */
  name?: string;
  /**
   * @remarks
   * The region where the service is deployed.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The Container Registry Enterprise Edition repository ID selected by the user when a non-official image is used.
   * 
   * @example
   * crr-xxx
   */
  repositoryId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D75C43DC-3D3A-5CC8-9AAC-8C77306C433B
   */
  requestId?: string;
  /**
   * @remarks
   * The configuration used to publish the service, such as the service configuration in EAS.
   * 
   * @example
   * {"Port":8080}
   */
  serviceConfig?: string;
  /**
   * @remarks
   * The resource address used to publish the service, such as the resource group name in Elastic Algorithm Service (EAS).
   * 
   * @example
   * eas-resource-xxx
   */
  serviceResourceUri?: string;
  static names(): { [key: string]: string } {
    return {
      crInstanceId: 'CrInstanceId',
      description: 'Description',
      engineConfigId: 'EngineConfigId',
      gmtReleasedTime: 'GmtReleasedTime',
      imageAuth: 'ImageAuth',
      imageName: 'ImageName',
      latestProdReleaseOrder: 'LatestProdReleaseOrder',
      name: 'Name',
      region: 'Region',
      repositoryId: 'RepositoryId',
      requestId: 'RequestId',
      serviceConfig: 'ServiceConfig',
      serviceResourceUri: 'ServiceResourceUri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crInstanceId: 'string',
      description: 'string',
      engineConfigId: 'string',
      gmtReleasedTime: 'string',
      imageAuth: 'string',
      imageName: 'string',
      latestProdReleaseOrder: GetServiceResponseBodyLatestProdReleaseOrder,
      name: 'string',
      region: 'string',
      repositoryId: 'string',
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

