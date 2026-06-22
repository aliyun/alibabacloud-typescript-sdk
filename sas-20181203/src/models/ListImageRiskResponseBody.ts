// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageRiskResponseBodyImageRiskListEndPointList extends $dara.Model {
  /**
   * @remarks
   * The list of endpoint domain names.
   */
  domains?: string[];
  /**
   * @remarks
   * The type of the endpoint domain name. Valid values:
   * - **internet**: public network
   * - **intranet**: private network.
   * 
   * @example
   * internet
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      domains: 'Domains',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domains: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageRiskResponseBodyImageRiskList extends $dara.Model {
  /**
   * @remarks
   * The digest value of the image.
   * 
   * @example
   * 3f8efc2184cf1d24936b49c27286a284714b77be34c80c9ee38ca6bf322445****
   */
  digest?: string;
  /**
   * @remarks
   * The list of endpoint information.
   */
  endPointList?: ListImageRiskResponseBodyImageRiskListEndPointList[];
  /**
   * @remarks
   * The list of endpoints for the image service.
   * 
   * @example
   * https://172.20.XXX.XXX/test
   */
  endpoints?: string;
  /**
   * @remarks
   * The image.
   * 
   * @example
   * .aliyuncs.com/sas_test/baseline:exploit
   */
  image?: string;
  /**
   * @remarks
   * The registration status of the image repository. Valid values:
   * 
   * - **IN_SAS**: The repository is registered in Security Center.
   * - **NOT_IN_SAS**: The repository is not registered in Security Center.
   * 
   * @example
   * IN_SAS
   */
  imageAccessType?: string;
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * f922bfeb6960436fe3f0e7b62fc6b9a0b47980986669c367c22433269404****
   */
  imageId?: string;
  /**
   * @remarks
   * The public network access URL of the image repository.
   * 
   * @example
   * ****registry-registry.cn-shenzhen-finance-1.cr.aliyuncs.com/xxxx/docker-****
   */
  internetURLs?: string;
  /**
   * @remarks
   * The region where the image repository resides.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the image registry. Valid values:
   * 
   * - **acr**: ACR
   * - **harbor**: Harbor
   * - **quay**: Quay
   * - **CI/CD**: Jenkins.
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
   * crr-bk2l746eyxca1****
   */
  repoId?: string;
  /**
   * @remarks
   * The name of the image repository.
   * 
   * @example
   * scan_test
   */
  repoName?: string;
  /**
   * @remarks
   * The image namespace.
   * 
   * @example
   * vultar***
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The repository type. Valid values:
   * 
   * - `PUBLIC`: public
   * 
   * - `PRIVATE`: private.
   * 
   * @example
   * PRIVATE
   */
  repoType?: string;
  /**
   * @remarks
   * The statistics of security events.
   * 
   * @example
   * {
   * 	"baselineNum": 0,
   * 	"newSuspicious": 0,
   * 	"vul": 0
   * }
   */
  statistics?: string;
  /**
   * @remarks
   * The image tag.
   * 
   * @example
   * 0.1.0
   */
  tag?: string;
  /**
   * @remarks
   * The tag immutability setting. If immutability is enabled, image versions other than latest cannot be used to overwrite existing versions in this repository. Valid values:
   * - **0**: Mutable.
   * - **1**: Immutable.
   * 
   * @example
   * 0
   */
  tagImmutable?: number;
  /**
   * @remarks
   * The unique identifier of the image.
   * 
   * @example
   * 624778f3-5bf2-423c-ac0c-47a62c05****
   */
  uuid?: string;
  /**
   * @remarks
   * The VPC access URL of the image repository.
   * 
   * @example
   * ****-registry-registry-vpc.cn-shenzhen-finance-1.cr.aliyuncs.com/xxxx/docker-****
   */
  vpcURLs?: string;
  static names(): { [key: string]: string } {
    return {
      digest: 'Digest',
      endPointList: 'EndPointList',
      endpoints: 'Endpoints',
      image: 'Image',
      imageAccessType: 'ImageAccessType',
      imageId: 'ImageId',
      internetURLs: 'InternetURLs',
      regionId: 'RegionId',
      registryType: 'RegistryType',
      repoId: 'RepoId',
      repoName: 'RepoName',
      repoNamespace: 'RepoNamespace',
      repoType: 'RepoType',
      statistics: 'Statistics',
      tag: 'Tag',
      tagImmutable: 'TagImmutable',
      uuid: 'Uuid',
      vpcURLs: 'VpcURLs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      digest: 'string',
      endPointList: { 'type': 'array', 'itemType': ListImageRiskResponseBodyImageRiskListEndPointList },
      endpoints: 'string',
      image: 'string',
      imageAccessType: 'string',
      imageId: 'string',
      internetURLs: 'string',
      regionId: 'string',
      registryType: 'string',
      repoId: 'string',
      repoName: 'string',
      repoNamespace: 'string',
      repoType: 'string',
      statistics: 'string',
      tag: 'string',
      tagImmutable: 'number',
      uuid: 'string',
      vpcURLs: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.endPointList)) {
      $dara.Model.validateArray(this.endPointList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListImageRiskResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page in a paging query.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The page number of the current page in a paging query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paging query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 23
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

export class ListImageRiskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of image risk information.
   */
  imageRiskList?: ListImageRiskResponseBodyImageRiskList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListImageRiskResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID, which is a unique identifier generated by Alibaba Cloud for the request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 050ACC7A-D4FD-55C6-B861-BA9569C1****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      imageRiskList: 'ImageRiskList',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      imageRiskList: { 'type': 'array', 'itemType': ListImageRiskResponseBodyImageRiskList },
      pageInfo: ListImageRiskResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.imageRiskList)) {
      $dara.Model.validateArray(this.imageRiskList);
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

