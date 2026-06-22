// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageInfoListResponseBodyImageInfos extends $dara.Model {
  /**
   * @remarks
   * The number of alerts detected in the current pod, application, namespace, or cluster.
   * 
   * @example
   * 10
   */
  alarmCount?: number;
  /**
   * @remarks
   * Indicates whether the asset has security alerts. Valid values:
   * - **YES**: Security alerts exist.
   * - **NO**: No security alerts exist.
   * 
   * @example
   * YES
   */
  alarmStatus?: string;
  /**
   * @remarks
   * The digest value of the image.
   * 
   * @example
   * a3521b04dfdd1361a24be6263f2983cf12ba910989f4d9f7324da7e1e89f****
   */
  digest?: string;
  /**
   * @remarks
   * The list of endpoints for the image service.
   * 
   * @example
   * cn-hangzhou-x7
   */
  endpoints?: string;
  /**
   * @remarks
   * The time when the image was created.
   * 
   * @example
   * 1636962328000
   */
  imageCreate?: number;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * bb0175afea16138815a8900adeeb0315d88a83a2376eeffa14db1d693a15****
   */
  imageId?: string;
  /**
   * @remarks
   * The image size.
   * 
   * @example
   * 157408623
   */
  imageSize?: number;
  /**
   * @remarks
   * The time when the image was last updated.
   * 
   * @example
   * 1636974116000
   */
  imageUpdate?: number;
  /**
   * @remarks
   * The ID of the image instance.
   * 
   * @example
   * i-wz95abw6pa7y79ve****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the image instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The registry type.
   * 
   * @example
   * harbor
   */
  registryType?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * @example
   * crr-5qk9v2rdt0s****
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * opa-test
   */
  repoName?: string;
  /**
   * @remarks
   * The namespace of the image repository.
   * 
   * @example
   * libssh2
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The repository type. Valid values:
   * 
   * - `PUBLIC`: public
   * 
   * - `PRIVATE`: private
   * 
   * @example
   * PUBLIC
   */
  repoType?: string;
  /**
   * @remarks
   * Indicates whether the image has security risks. Valid values:
   * 
   * - **YES**: The image has risks.
   * - **NO**: The image does not have risks.
   * 
   * @example
   * YES
   */
  riskStatus?: string;
  /**
   * @remarks
   * The business purpose tag of the image.
   * 
   * @example
   * PAI
   */
  sourceBizTag?: string;
  /**
   * @remarks
   * The image status.
   * 
   * @example
   * NORMAL
   */
  status?: string;
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * v1
   */
  tag?: string;
  /**
   * @remarks
   * The tag immutability.
   * 
   * @example
   * 0
   */
  tagImmutable?: number;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * ff9ca084-7faa-4ab2-8728-69024755****
   */
  uuid?: string;
  /**
   * @remarks
   * The total number of vulnerabilities in your assets.
   * 
   * @example
   * 1
   */
  vulCount?: number;
  /**
   * @remarks
   * Indicates whether the instance has vulnerabilities. Valid values:
   * - **YES**: Vulnerabilities exist.
   * - **NO**: No vulnerabilities exist.
   * 
   * @example
   * YES
   */
  vulStatus?: string;
  static names(): { [key: string]: string } {
    return {
      alarmCount: 'AlarmCount',
      alarmStatus: 'AlarmStatus',
      digest: 'Digest',
      endpoints: 'Endpoints',
      imageCreate: 'ImageCreate',
      imageId: 'ImageId',
      imageSize: 'ImageSize',
      imageUpdate: 'ImageUpdate',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
      registryType: 'RegistryType',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      repoType: 'RepoType',
      riskStatus: 'RiskStatus',
      sourceBizTag: 'SourceBizTag',
      status: 'Status',
      tag: 'Tag',
      tagImmutable: 'TagImmutable',
      uuid: 'Uuid',
      vulCount: 'VulCount',
      vulStatus: 'VulStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmCount: 'number',
      alarmStatus: 'string',
      digest: 'string',
      endpoints: 'string',
      imageCreate: 'number',
      imageId: 'string',
      imageSize: 'number',
      imageUpdate: 'number',
      instanceId: 'string',
      regionId: 'string',
      registryType: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      repoType: 'string',
      riskStatus: 'string',
      sourceBizTag: 'string',
      status: 'string',
      tag: 'string',
      tagImmutable: 'number',
      uuid: 'string',
      vulCount: 'number',
      vulStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageInfoListResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the information about images.
   */
  imageInfos?: DescribeImageInfoListResponseBodyImageInfos[];
  /**
   * @remarks
   * The ID of the request, which is a unique identifier generated by Alibaba Cloud for the request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * BC3B0DAE-CC0E-59E9-9383-6F060F22****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageInfos: 'ImageInfos',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageInfos: { 'type': 'array', 'itemType': DescribeImageInfoListResponseBodyImageInfos },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageInfos)) {
      $dara.Model.validateArray(this.imageInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

