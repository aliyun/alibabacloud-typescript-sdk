// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetAccessLogsDownloadAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CLB instance.
   * 
   * @example
   * lb-bp1b6c719dfa08ex*****
   */
  loadBalancerId?: string;
  /**
   * @remarks
   * The access log forwarding rule. Parameters:
   * 
   * *   **LogProject**: the name of the project of Simple Log Service.
   * *   **LogStore**: the name of the Logstore of Simple Log Service.
   * *   **LoadBalancerId**: the ID of the CLB instance.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"logProject":"my-project", "LogStore":"my-log-store", "LoadBalancerId":"lb-uf68ps3rekbljmdb0****"}]
   */
  logsDownloadAttributes?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the CLB instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/27584.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The tags that are added to the CLB instance. The tags must be key-value pairs that are contained in a JSON dictionary.
   * 
   * You can specify up to 10 tags in each call.
   * 
   * @example
   * [{"tagKey":"Key1","tagValue":"Value1"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      loadBalancerId: 'LoadBalancerId',
      logsDownloadAttributes: 'LogsDownloadAttributes',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerId: 'string',
      logsDownloadAttributes: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

