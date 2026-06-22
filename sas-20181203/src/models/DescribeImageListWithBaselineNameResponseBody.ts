// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageListWithBaselineNameResponseBodyImageInfos extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * c08d5fc1a329a4b88950a253d082f1****
   */
  clusterId?: string;
  /**
   * @remarks
   * The cluster name.
   * 
   * @example
   * docker-law
   */
  clusterName?: string;
  /**
   * @remarks
   * The container ID.
   * 
   * @example
   * 04d20e98c8e2c93b7b864372084320a15a58c8671e53c972ce3a71d9c163****
   */
  containerId?: string;
  /**
   * @remarks
   * The SHA256 value of the image digest.
   * 
   * @example
   * 2e6daffce524ffeae66cccaa90c8fc47de912346dcec295c27395b6d66db6423
   */
  digest?: string;
  /**
   * @remarks
   * The timestamp of the first scan, in milliseconds.
   * 
   * @example
   * 1649814050000
   */
  firstScanTime?: number;
  /**
   * @remarks
   * The number of images with a **high** risk level that have baseline risk issues.
   * 
   * @example
   * 1
   */
  highRiskImage?: number;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * registry.cn-wulanchabu.aliyuncs.com/sas_test/huxin-test-001:nuxeo6-conta****
   */
  image?: string;
  /**
   * @remarks
   * The timestamp when the image was created, in milliseconds.
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
   * cddb5fd33b34a1fabb358d0a19497cdfe362fe624821cb250947af0ea5cc****
   */
  imageId?: string;
  /**
   * @remarks
   * The size of the image.
   * 
   * @example
   * 157408623
   */
  imageSize?: number;
  /**
   * @remarks
   * The timestamp when the image was updated, in milliseconds.
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
   * cri-a595qp31knh9****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server instance.
   * 
   * @example
   * pre.mongo-196
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 47.96.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server.
   * 
   * @example
   * 172.16.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The timestamp of the most recent scan, in milliseconds.
   * 
   * @example
   * 1649814050000
   */
  lastScanTime?: number;
  /**
   * @remarks
   * The number of images with a **low** risk level that have baseline risk issues.
   * 
   * @example
   * 0
   */
  lowRiskImage?: number;
  /**
   * @remarks
   * The number of images with a **medium** risk level that have baseline risk issues.
   * 
   * @example
   * 0
   */
  middleRiskImage?: number;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * test-002
   */
  namespace?: string;
  /**
   * @remarks
   * The number of images that do not have baseline risk issues.
   * 
   * @example
   * 0
   */
  noRiskImage?: number;
  /**
   * @remarks
   * The pod.
   * 
   * @example
   * 22222-7xsqq
   */
  pod?: string;
  /**
   * @remarks
   * The region ID of the image instance.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the image repository.
   * 
   * @example
   * crr-1lt6q7167yh6****
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * scanner
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
   * The type of the image repository.
   * 
   * @example
   * PRIVATE
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
   * The version of the image.
   * 
   * @example
   * v1
   */
  tag?: string;
  /**
   * @remarks
   * The ID of the scan target.
   * 
   * @example
   * m-bp17m0pc0xprzbwo****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the scan target.
   * 
   * @example
   * spod
   */
  targetName?: string;
  /**
   * @remarks
   * The object type of the scan target. Valid values:
   * 
   * - ** ECS_IMAGE**: image.
   * - ** ECS_SNAPSHOT**: snapshot.
   * 
   * @example
   * ECS_IMAGE
   */
  targetType?: string;
  /**
   * @remarks
   * The total number of baseline risk items in the image.
   * 
   * @example
   * 3
   */
  totalItemCount?: number;
  /**
   * @remarks
   * The unique identifier of the image.
   * 
   * @example
   * f58681174f944623345379e23b7b****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      containerId: 'ContainerId',
      digest: 'Digest',
      firstScanTime: 'FirstScanTime',
      highRiskImage: 'HighRiskImage',
      image: 'Image',
      imageCreate: 'ImageCreate',
      imageId: 'ImageId',
      imageSize: 'ImageSize',
      imageUpdate: 'ImageUpdate',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      lastScanTime: 'LastScanTime',
      lowRiskImage: 'LowRiskImage',
      middleRiskImage: 'MiddleRiskImage',
      namespace: 'Namespace',
      noRiskImage: 'NoRiskImage',
      pod: 'Pod',
      regionId: 'RegionId',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      repoType: 'RepoType',
      riskStatus: 'RiskStatus',
      tag: 'Tag',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetType: 'TargetType',
      totalItemCount: 'TotalItemCount',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      containerId: 'string',
      digest: 'string',
      firstScanTime: 'number',
      highRiskImage: 'number',
      image: 'string',
      imageCreate: 'number',
      imageId: 'string',
      imageSize: 'number',
      imageUpdate: 'number',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      lastScanTime: 'number',
      lowRiskImage: 'number',
      middleRiskImage: 'number',
      namespace: 'string',
      noRiskImage: 'number',
      pod: 'string',
      regionId: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      repoType: 'string',
      riskStatus: 'string',
      tag: 'string',
      targetId: 'string',
      targetName: 'string',
      targetType: 'string',
      totalItemCount: 'number',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageListWithBaselineNameResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of images that have baseline risks on the current page.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The page number of the page to return. Default value: **1**, which indicates that the first page is returned.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * Settings for paging in a paged query. The number of image baseline check results to display per page. Default value: **10**, which indicates that 10 image baseline check results are displayed per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of images that have baseline risks in the image baseline check.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeImageListWithBaselineNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of image information.
   */
  imageInfos?: DescribeImageListWithBaselineNameResponseBodyImageInfos[];
  /**
   * @remarks
   * The paging information for the paged query results.
   */
  pageInfo?: DescribeImageListWithBaselineNameResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 5B8C2156-2DB9-5A42-99E7-F2ED5AE9EA1F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageInfos: 'ImageInfos',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageInfos: { 'type': 'array', 'itemType': DescribeImageListWithBaselineNameResponseBodyImageInfos },
      pageInfo: DescribeImageListWithBaselineNameResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageInfos)) {
      $dara.Model.validateArray(this.imageInfos);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

