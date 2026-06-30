// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEndpointGroupsRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key cannot be an empty string.
   * 
   * The tag key can be up to 64 characters long and cannot start with `aliyun` or `acs:`, or contain `http://` or `https://`.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @remarks
   * The tag value. The tag value can be an empty string.
   * 
   * The tag value can be up to 128 characters long and cannot start with `aliyun` or `acs:`, or contain `http://` or `https://`.
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
   * The ID of the Global Accelerator instance.
   * 
   * This parameter is required.
   * 
   * @example
   * ga-bp1odcab8tmno0hdq****
   */
  acceleratorId?: string;
  /**
   * @remarks
   * Whether to enable the access log. Valid values:
   * 
   * - **on**: enables the access log.
   * 
   * - **off** (default): disables the access log.
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
  endpointGroupRegion?: string;
  /**
   * @remarks
   * The type of the endpoint group. Valid values:
   * 
   * - **default**: a default endpoint group.
   * 
   * - **virtual**: a virtual endpoint group.
   * 
   * - If you omit this parameter, the operation returns all default and virtual endpoint groups.
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
   * The number of entries to return on each page. Maximum value: **50**. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the region where the Global Accelerator instance is deployed. Set the value to **cn-hangzhou**.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The tags used to filter endpoint groups. You can specify up to 20 tags.
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
      endpointGroupRegion: 'EndpointGroupRegion',
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
      endpointGroupRegion: 'string',
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

