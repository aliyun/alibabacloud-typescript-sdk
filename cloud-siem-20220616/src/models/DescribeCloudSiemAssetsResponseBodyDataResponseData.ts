// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCloudSiemAssetsResponseBodyDataResponseDataAssetInfo } from "./DescribeCloudSiemAssetsResponseBodyDataResponseDataAssetInfo";


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

