// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkReachableAnalysisRequestTag extends $dara.Model {
  /**
   * @remarks
   * The key of the tag to add to the resource. The tag key can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag key cannot start with `acs:` or `aliyun`.
   * 
   * You can add up to 20 tags in each call.
   * 
   * @example
   * Team
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag to add to the resource. The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `acs:` or `aliyun`. The tag value can be an empty string.
   * 
   * You can add up to 20 tag values in each call.
   * 
   * @example
   * ops
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

export class CreateNetworkReachableAnalysisRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the network path. You can call the [CreateNetworkPath](https://help.aliyun.com/document_detail/2366522.html) operation to obtain the ID of the network path.
   * 
   * This parameter is required.
   * 
   * @example
   * np-b2f618ceb2c84057****
   */
  networkPathId?: string;
  /**
   * @remarks
   * The ID of the region for which you want to create a task for analyzing network reachability.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The tags to add to the resource.
   */
  tag?: CreateNetworkReachableAnalysisRequestTag[];
  static names(): { [key: string]: string } {
    return {
      networkPathId: 'NetworkPathId',
      regionId: 'RegionId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkPathId: 'string',
      regionId: 'string',
      tag: { 'type': 'array', 'itemType': CreateNetworkReachableAnalysisRequestTag },
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

