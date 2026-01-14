// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEndpointGroupsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the endpoint group. It cannot be an empty string.
   * 
   * The tag key can be up to 64 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.
   * 
   * You can specify up to 20 tag keys.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the endpoint group. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.
   * 
   * You can specify up to 20 tag values.
   * 
   * @example
   * test-value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEndpointGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the GA instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * Specifies whether the access logging feature is enabled. Default value: off. Valid values:
   * 
   * *   **on**: The access logging feature is enabled.
   * *   **off**: The access logging feature is disabled.
   * 
   * @example
   * on
   */
  accessLogSwitch?: string;
  /**
   * @remarks
   * The ID of the endpoint group.
   * 
   * @example
   * epg-bp16jdc00bhe97sr5****
   */
  endpointGroupId?: string;
  /**
   * @remarks
   * The type of the endpoint group. Valid values: Valid values:
   * 
   * *   **default**
   * *   **virtual**
   * *   If you leave this parameter empty, all default and virtual endpoint groups are queried.
   * 
   * @example
   * virtual
   */
  endpointGroupType?: string;
  /**
   * @remarks
   * The ID of the listener.
   * 
   * @example
   * lsr-bp1bpn0kn908w4nbw****
   */
  listenerId?: string;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the Global Accelerator (GA) instance is deployed. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The tag of the endpoint group.
   * 
   * **if can be null:**
   * false
   */
  tag?: ListEndpointGroupsRequestTag[];
  static names(): { [key: string]: string } {
    return {
      acceleratorId: 'AcceleratorId',
      accessLogSwitch: 'AccessLogSwitch',
      endpointGroupId: 'EndpointGroupId',
      endpointGroupType: 'EndpointGroupType',
      listenerId: 'ListenerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceleratorId: 'string',
      accessLogSwitch: 'string',
      endpointGroupId: 'string',
      endpointGroupType: 'string',
      listenerId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': ListEndpointGroupsRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

