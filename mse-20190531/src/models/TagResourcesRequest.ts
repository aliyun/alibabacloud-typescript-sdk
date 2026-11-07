// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key. The tag key cannot be an empty string. It can be up to 128 characters in length. The tag key cannot start with \\`aliyun\\` or \\`acs:\\`. The tag key cannot contain \\`http\\://\\` or \\`https\\://\\`.
   * 
   * @example
   * env
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * prd
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

export class TagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - zh: Chinese
   * 
   * - en: English
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The resource ID.
   * 
   * - *Registration and configuration center*: the instance ID.
   * 
   * - *Cloud-native gateway*: the unique ID of the gateway.
   * 
   * - *Microservice administration application*: the AppID of the microservice administration application. Note that this is not the LicenseKey.
   * 
   * > The number in the parameter name specifies the index of the instance ID. For example:
   * 
   * - **ResourceId.0** specifies the first instance ID.
   * 
   * - **ResourceId.1** specifies the second instance ID.
   */
  resourceId?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * - CLUSTER: a registration and configuration center.
   * 
   * - GATEWAY: a cloud-native gateway.
   * 
   * - GOVERNANCEAPPLICATION: a microservice administration application.
   * 
   * This parameter is required.
   * 
   * @example
   * CLUSTER、GATEWAY、GOVERNANCEAPPLICATION
   */
  resourceType?: string;
  /**
   * @remarks
   * A list of tags. You can specify up to 20 tags.
   * 
   * This parameter is required.
   */
  tag?: TagResourcesRequestTag[];
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

