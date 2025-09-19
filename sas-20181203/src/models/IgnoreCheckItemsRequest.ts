// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IgnoreCheckItemsRequestCheckAndRiskTypeList extends $dara.Model {
  /**
   * @remarks
   * The ID of the check item.
   * 
   * @example
   * 52
   */
  checkId?: number;
  /**
   * @remarks
   * The baseline type of the check item.
   * 
   * @example
   * weak_password
   */
  riskType?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      riskType: 'RiskType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'number',
      riskType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class IgnoreCheckItemsRequestContainerItems extends $dara.Model {
  /**
   * @remarks
   * The names of the containers that need to be whitelisted for the current asset, separated by English commas.
   * 
   * @example
   * "anythingllm,ChuanhuChat"
   */
  containerNames?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * > You can call the [DescribeCloudCenterInstances](https://help.aliyun.com/document_detail/141932.html) operation to query the UUIDs of servers.
   * 
   * @example
   * 14eb2fb6-ab02-4869-a1e1-2cdb0f7*****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      containerNames: 'ContainerNames',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerNames: 'string',
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

export class IgnoreCheckItemsRequest extends $dara.Model {
  /**
   * @remarks
   * The information about check items.
   */
  checkAndRiskTypeList?: IgnoreCheckItemsRequestCheckAndRiskTypeList[];
  /**
   * @remarks
   * The IDs of check items.
   */
  checkIds?: number[];
  /**
   * @remarks
   * List of container names that need to be whitelisted.
   */
  containerItems?: IgnoreCheckItemsRequestContainerItems[];
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The reason why you add the risk item to the whitelist.
   * 
   * @example
   * already config in another way
   */
  reason?: string;
  /**
   * @remarks
   * The data source. Valid values:
   * 
   * *   **default**: host baseline
   * *   **agentless**: agentless baseline
   * 
   * @example
   * agentless
   */
  source?: string;
  /**
   * @remarks
   * The operation that you want to perform on the risk item.Valid values:
   * *  **1**: adds the risk item to the whitelist
   * *  **2**: removes the risk item from the whitelist
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  type?: number;
  /**
   * @remarks
   * The UUIDs of the servers.
   * 
   * > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to query the UUIDs of servers.
   */
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      checkAndRiskTypeList: 'CheckAndRiskTypeList',
      checkIds: 'CheckIds',
      containerItems: 'ContainerItems',
      lang: 'Lang',
      reason: 'Reason',
      source: 'Source',
      type: 'Type',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkAndRiskTypeList: { 'type': 'array', 'itemType': IgnoreCheckItemsRequestCheckAndRiskTypeList },
      checkIds: { 'type': 'array', 'itemType': 'number' },
      containerItems: { 'type': 'array', 'itemType': IgnoreCheckItemsRequestContainerItems },
      lang: 'string',
      reason: 'string',
      source: 'string',
      type: 'number',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.checkAndRiskTypeList)) {
      $dara.Model.validateArray(this.checkAndRiskTypeList);
    }
    if(Array.isArray(this.checkIds)) {
      $dara.Model.validateArray(this.checkIds);
    }
    if(Array.isArray(this.containerItems)) {
      $dara.Model.validateArray(this.containerItems);
    }
    if(Array.isArray(this.uuidList)) {
      $dara.Model.validateArray(this.uuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

