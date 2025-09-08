// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudSiemAssetsResponseBodyDataPageInfo extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeCloudSiemAssetsResponseBodyDataResponseDataAssetInfo extends $dara.Model {
  /**
   * @remarks
   * The attribute key.
   * 
   * @example
   * suspicious.wbd.wb.trojanpath
   */
  key?: string;
  /**
   * @remarks
   * The name of the key.
   * 
   * @example
   * Trojan Path
   */
  keyName?: string;
  /**
   * @remarks
   * The value of the key.
   * 
   * @example
   * /root/test33.php
   */
  values?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      keyName: 'KeyName',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      keyName: 'string',
      values: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudSiemAssetsResponseBodyDataResponseData extends $dara.Model {
  /**
   * @remarks
   * The UUID of the alert associated with the event.
   * 
   * @example
   * sas_71e24437d2797ce8fc59692905a4****
   */
  alertUuid?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account in SIEM.
   * 
   * @example
   * 1276085894174392
   */
  aliuid?: number;
  /**
   * @remarks
   * The logical ID of the asset.
   * 
   * @example
   * 0616caeb-acb8-45e0-8520-4ee5fbe251f0
   */
  assetId?: string;
  /**
   * @remarks
   * The display information of the asset is in the JSON format.
   * 
   * @example
   * [{"KeyName": "${aliyun.siem.asset.asset_name}","Values": "zsw-agentless-ubuntu20","Key": "asset_name"}]
   */
  assetInfo?: DescribeCloudSiemAssetsResponseBodyDataResponseDataAssetInfo[];
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * zsw-agentless-centos****
   */
  assetName?: string;
  /**
   * @remarks
   * The type of the asset. Valid values:
   * 
   * *   ip
   * *   domain
   * *   url
   * *   process
   * *   file
   * *   host
   * 
   * @example
   * domain
   */
  assetType?: string;
  /**
   * @remarks
   * The cloud code of the entity. Valid values:
   * 
   * *   aliyun: Alibaba Cloud
   * *   qcloud: Tencent Cloud
   * *   hcloud: Huawei Cloud
   * 
   * @example
   * aliyun
   */
  cloudCode?: string;
  /**
   * @remarks
   * The time when the asset was synchronized.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the asset was last updated.
   * 
   * @example
   * 2021-01-06 16:37:29
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the asset.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The UUID of the event.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The ID of the associated account to which the asset belongs.
   * 
   * @example
   * 176555323***
   */
  subUserId?: number;
  static names(): { [key: string]: string } {
    return {
      alertUuid: 'AlertUuid',
      aliuid: 'Aliuid',
      assetId: 'AssetId',
      assetInfo: 'AssetInfo',
      assetName: 'AssetName',
      assetType: 'AssetType',
      cloudCode: 'CloudCode',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      incidentUuid: 'IncidentUuid',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertUuid: 'string',
      aliuid: 'number',
      assetId: 'string',
      assetInfo: { 'type': 'array', 'itemType': DescribeCloudSiemAssetsResponseBodyDataResponseDataAssetInfo },
      assetName: 'string',
      assetType: 'string',
      cloudCode: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      incidentUuid: 'string',
      subUserId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.assetInfo)) {
      $dara.Model.validateArray(this.assetInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudSiemAssetsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: DescribeCloudSiemAssetsResponseBodyDataPageInfo;
  /**
   * @remarks
   * The detailed data.
   */
  responseData?: DescribeCloudSiemAssetsResponseBodyDataResponseData[];
  static names(): { [key: string]: string } {
    return {
      pageInfo: 'PageInfo',
      responseData: 'ResponseData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageInfo: DescribeCloudSiemAssetsResponseBodyDataPageInfo,
      responseData: { 'type': 'array', 'itemType': DescribeCloudSiemAssetsResponseBodyDataResponseData },
    };
  }

  validate() {
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    if(Array.isArray(this.responseData)) {
      $dara.Model.validateArray(this.responseData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudSiemAssetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 123456
   */
  data?: DescribeCloudSiemAssetsResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: DescribeCloudSiemAssetsResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

