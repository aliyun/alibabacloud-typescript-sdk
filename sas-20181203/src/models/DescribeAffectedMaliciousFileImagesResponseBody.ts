// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAffectedMaliciousFileImagesResponseBodyAffectedMaliciousFileImagesResponse extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * c08d5fc1a329a4b88950a253d082f1****
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * docker-law
   */
  clusterName?: string;
  /**
   * @remarks
   * The ID of the container.
   * 
   * @example
   * 04d20e98c8e2c93b7b864372084320a15a58c8671e53c972ce3a71d9c163****
   */
  containerId?: string;
  /**
   * @remarks
   * The image digest.
   * 
   * @example
   * 6a5e1031a5858617f7d8a179ead6****
   */
  digest?: string;
  /**
   * @remarks
   * The URL to download the malicious image sample.
   * 
   * @example
   * https://aegis-metadata-file.oss-cn-shanghai.aliyuncs.com/
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The path to the image file.
   * 
   * @example
   * /d836968041f7683b5605a****
   */
  filePath?: string;
  /**
   * @remarks
   * The timestamp of the first scan.
   * 
   * @example
   * 1594907349000
   */
  firstScanTimestamp?: number;
  /**
   * @remarks
   * The text that is highlighted.
   * 
   * @example
   * {"ruleVersion":"highlight_20210908","ruleId":600106,"events":[[2,54]]}
   */
  highLight?: string;
  /**
   * @remarks
   * The ID of alert event.
   * 
   * @example
   * 1000040
   */
  id?: number;
  /**
   * @remarks
   * The name of the image.
   * 
   * @example
   * registry.cn-wulanchabu.aliyuncs.com/sas_test/huxin-test-001:nuxeo6-conta****
   */
  image?: string;
  /**
   * @remarks
   * The UUID of the image.
   * 
   * @example
   * e05c0de798217637868ef4****
   */
  imageUuid?: string;
  /**
   * @remarks
   * The name of the ECS instance.
   * 
   * @example
   * sql-test-001
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server.
   * 
   * @example
   * 47.101.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server.
   * 
   * @example
   * 172.22.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The timestamp of the last scan.
   * 
   * @example
   * 1596522785000
   */
  latestScanTimestamp?: number;
  /**
   * @remarks
   * The timestamp of the last verification.
   * 
   * @example
   * 1596522711000
   */
  latestVerifyTimestamp?: number;
  /**
   * @remarks
   * The image layer.
   * 
   * @example
   * 27213ad3447f0209dd152a5cadea****
   */
  layer?: string;
  /**
   * @remarks
   * The severity of the malicious image sample. Valid values:
   * 
   * *   **serious**
   * *   **suspicious**
   * *   **remind**
   * 
   * @example
   * serious
   */
  level?: string;
  /**
   * @remarks
   * The MD5 hash value of the malicious image sample.
   * 
   * @example
   * d836968041f768300d9605a****
   */
  maliciousMd5?: string;
  /**
   * @remarks
   * The namespace to which the image repository belongs.
   * 
   * @example
   * hanghai-namespace
   */
  namespace?: string;
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
   * The ID of the image repository.
   * 
   * @example
   * crr-vridcl4****
   */
  repoId?: string;
  /**
   * @remarks
   * The ID of the container image.
   * 
   * @example
   * cri-datvail3m****
   */
  repoInstanceId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * centos
   */
  repoName?: string;
  /**
   * @remarks
   * The region ID of the image repository.
   * 
   * @example
   * cn-shanghai
   */
  repoRegionId?: string;
  /**
   * @remarks
   * The handling status of the malicious image sample. Valid values:
   * 
   * *   **0**: unhandled
   * *   **1**: handled
   * *   **2**: verifying
   * *   **3**: added to the whitelist
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The tag that is added to the image.
   * 
   * @example
   * 0.2
   */
  tag?: string;
  /**
   * @remarks
   * The ID of the task object.
   * 
   * @example
   * m-bp17m0pc0xprzbwo****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the task object.
   * 
   * @example
   * source-test-obj-9LaLJ
   */
  targetName?: string;
  /**
   * @remarks
   * The object type. Valid value:
   * 
   * *   **ECS_IMAGE**
   * *   **ECS_SNAPSHOT**
   * 
   * @example
   * ECS_IMAGE
   */
  targetType?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 48a473c4-1650-4931-a822-7e6c2c28****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      containerId: 'ContainerId',
      digest: 'Digest',
      downloadUrl: 'DownloadUrl',
      filePath: 'FilePath',
      firstScanTimestamp: 'FirstScanTimestamp',
      highLight: 'HighLight',
      id: 'Id',
      image: 'Image',
      imageUuid: 'ImageUuid',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      latestScanTimestamp: 'LatestScanTimestamp',
      latestVerifyTimestamp: 'LatestVerifyTimestamp',
      layer: 'Layer',
      level: 'Level',
      maliciousMd5: 'MaliciousMd5',
      namespace: 'Namespace',
      pod: 'Pod',
      repoId: 'RepoId',
      repoInstanceId: 'RepoInstanceId',
      repoName: 'RepoName',
      repoRegionId: 'RepoRegionId',
      status: 'Status',
      tag: 'Tag',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetType: 'TargetType',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      containerId: 'string',
      digest: 'string',
      downloadUrl: 'string',
      filePath: 'string',
      firstScanTimestamp: 'number',
      highLight: 'string',
      id: 'number',
      image: 'string',
      imageUuid: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      latestScanTimestamp: 'number',
      latestVerifyTimestamp: 'number',
      layer: 'string',
      level: 'string',
      maliciousMd5: 'string',
      namespace: 'string',
      pod: 'string',
      repoId: 'string',
      repoInstanceId: 'string',
      repoName: 'string',
      repoRegionId: 'string',
      status: 'number',
      tag: 'string',
      targetId: 'string',
      targetName: 'string',
      targetType: 'string',
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

export class DescribeAffectedMaliciousFileImagesResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of images that have malicious image samples returned on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page. Pages start from page **1**. Default value: **1**.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page. Default value: **20**.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of images that have malicious image samples.
   * 
   * @example
   * 2
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

export class DescribeAffectedMaliciousFileImagesResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array consisting of the images that have malicious image samples.
   */
  affectedMaliciousFileImagesResponse?: DescribeAffectedMaliciousFileImagesResponseBodyAffectedMaliciousFileImagesResponse[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeAffectedMaliciousFileImagesResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * ACF97412-FD09-4D1F-994F-34DF12BREF20
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      affectedMaliciousFileImagesResponse: 'AffectedMaliciousFileImagesResponse',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedMaliciousFileImagesResponse: { 'type': 'array', 'itemType': DescribeAffectedMaliciousFileImagesResponseBodyAffectedMaliciousFileImagesResponse },
      pageInfo: DescribeAffectedMaliciousFileImagesResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.affectedMaliciousFileImagesResponse)) {
      $dara.Model.validateArray(this.affectedMaliciousFileImagesResponse);
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

