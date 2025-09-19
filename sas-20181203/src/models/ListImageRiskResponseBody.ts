// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListImageRiskResponseBodyImageRiskListEndPointList extends $dara.Model {
  /**
   * @remarks
   * An array that consists the details of the domain name in the endpoint.
   */
  domains?: string[];
  /**
   * @remarks
   * The type of the domain name in the endpoint. Valid values:
   * 
   * *   **internet**: Internet
   * *   **intranet**: internal network
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
   * An array that consists of the details of the endpoint.
   */
  endPointList?: ListImageRiskResponseBodyImageRiskListEndPointList[];
  /**
   * @remarks
   * The endpoint of Container Registry.
   * 
   * @example
   * https://172.20.XXX.XXX/test
   */
  endpoints?: string;
  /**
   * @remarks
   * The image of the container.
   * 
   * @example
   * .aliyuncs.com/sas_test/baseline:exploit
   */
  image?: string;
  /**
   * @remarks
   * The registration status of the image repository. Valid values:
   * 
   * *   **IN_SAS**: The image repository is registered with Security Center.
   * *   **NOT_IN_SAS**: The image repository is not registered with Security Center.
   * 
   * @example
   * IN_SAS
   */
  imageAccessType?: string;
  /**
   * @remarks
   * The ID of the image.
   * 
   * @example
   * f922bfeb6960436fe3f0e7b62fc6b9a0b47980986669c367c22433269404****
   */
  imageId?: string;
  /**
   * @remarks
   * The public endpoint of the image repository.
   * 
   * @example
   * ****registry-registry.cn-shenzhen-finance-1.cr.aliyuncs.com/xxxx/docker-****
   */
  internetURLs?: string;
  /**
   * @remarks
   * The region of the image repository.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The type of the image repository. Valid values:
   * 
   * *   **acr**
   * *   **harbor**
   * *   **quay**
   * *   **CI/CD**: Jenkins
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
   * The name of the namespace to which the repository belongs.
   * 
   * @example
   * vultar***
   */
  repoNamespace?: string;
  /**
   * @remarks
   * The type of the repository. Valid values:
   * 
   * *   `PUBLIC`
   * *   `PRIVATE`
   * 
   * @example
   * PRIVATE
   */
  repoType?: string;
  /**
   * @remarks
   * The statistics on a security event.
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
   * The tag that is added to the image.
   * 
   * @example
   * 0.1.0
   */
  tag?: string;
  /**
   * @remarks
   * Indicates whether the image version is immutable. If the image version is immutable, only the image of the latest version in the image repository can be overwritten. Valid values:
   * 
   * *   **0**: The image version is mutable.
   * *   **1**: The image version is immutable.
   * 
   * @example
   * 0
   */
  tagImmutable?: number;
  /**
   * @remarks
   * The UUID of the image.
   * 
   * @example
   * 624778f3-5bf2-423c-ac0c-47a62c05****
   */
  uuid?: string;
  /**
   * @remarks
   * The endpoint of the image repository in the VPC.
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
   * The number of entries returned on the current page.
   * 
   * @example
   * 3
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
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
   * An array that consists of security information about the image.
   */
  imageRiskList?: ListImageRiskResponseBodyImageRiskList[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListImageRiskResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
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

