// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseResourcesResponseBodyResourcesResponseHeaders extends $dara.Model {
  /**
   * @remarks
   * The key of the custom response header.
   * 
   * @example
   * Header-Key
   */
  key?: string;
  /**
   * @remarks
   * The value of the custom response header.
   * 
   * @example
   * Header-Value
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

export class DescribeDefenseResourcesResponseBodyResources extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the tracking cookie feature is enabled.
   * 
   * - **0**: disabled.
   * 
   * - **1**: enabled.
   * 
   * @example
   * 1
   */
  acwCookieStatus?: number;
  /**
   * @remarks
   * Indicates whether the secure attribute of the tracking cookie is enabled.
   * 
   * - **0**: disabled.
   * 
   * - **1**: enabled.
   * 
   * @example
   * 0
   */
  acwSecureStatus?: number;
  /**
   * @remarks
   * Indicates whether the secure attribute of the slider CAPTCHA cookie is enabled.
   * 
   * - **0**: disabled.
   * 
   * - **1**: enabled.
   * 
   * @example
   * 0
   */
  acwV3SecureStatus?: number;
  /**
   * @remarks
   * The custom XFF header that is used to obtain the real IP address of a client. If \\`XffStatus\\` is set to 1 and this parameter is left empty, the first IP address in the XFF header is used as the client IP address.
   */
  customHeaders?: string[];
  /**
   * @remarks
   * The description of the protected object.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The details of the protected object. The key-value pairs vary by product type.
   * 
   * @example
   * {"domain":"eou.eleme.cn","uri":"/"}
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * The time when the protected object was created. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1652149203187
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the protected object was modified. This value is a UNIX timestamp. Unit: milliseconds.
   * 
   * @example
   * 1665633032000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * @example
   * waf_v2_public_cn-k*****
   */
  instanceId?: string;
  /**
   * @remarks
   * The account to which the asset of the protected object belongs. This parameter is returned in a multi-account management scenario.
   * 
   * @example
   * 135*********46
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The protection mode of the protected object.
   * 
   * @example
   * domain
   */
  pattern?: string;
  /**
   * @remarks
   * The type of cloud service to which the protected object belongs.
   * 
   * @example
   * alb
   */
  product?: string;
  /**
   * @remarks
   * The name of the protected object.
   * 
   * @example
   * alb-rencs***
   */
  resource?: string;
  /**
   * @remarks
   * The name of the protected object group to which the protected object is added.
   * 
   * @example
   * test
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The source of the protected object.
   * 
   * @example
   * custom
   */
  resourceOrigin?: string;
  /**
   * @remarks
   * The custom response headers configured for the protected object.
   */
  responseHeaders?: DescribeDefenseResourcesResponseBodyResourcesResponseHeaders[];
  /**
   * @remarks
   * Indicates whether the X-Forwarded-For (XFF) proxy is enabled for the protected object.
   * 
   * @example
   * 1
   */
  xffStatus?: number;
  static names(): { [key: string]: string } {
    return {
      acwCookieStatus: 'AcwCookieStatus',
      acwSecureStatus: 'AcwSecureStatus',
      acwV3SecureStatus: 'AcwV3SecureStatus',
      customHeaders: 'CustomHeaders',
      description: 'Description',
      detail: 'Detail',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      instanceId: 'InstanceId',
      ownerUserId: 'OwnerUserId',
      pattern: 'Pattern',
      product: 'Product',
      resource: 'Resource',
      resourceGroup: 'ResourceGroup',
      resourceManagerResourceGroupId: 'ResourceManagerResourceGroupId',
      resourceOrigin: 'ResourceOrigin',
      responseHeaders: 'ResponseHeaders',
      xffStatus: 'XffStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acwCookieStatus: 'number',
      acwSecureStatus: 'number',
      acwV3SecureStatus: 'number',
      customHeaders: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      detail: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreate: 'number',
      gmtModified: 'number',
      instanceId: 'string',
      ownerUserId: 'string',
      pattern: 'string',
      product: 'string',
      resource: 'string',
      resourceGroup: 'string',
      resourceManagerResourceGroupId: 'string',
      resourceOrigin: 'string',
      responseHeaders: { 'type': 'array', 'itemType': DescribeDefenseResourcesResponseBodyResourcesResponseHeaders },
      xffStatus: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.customHeaders)) {
      $dara.Model.validateArray(this.customHeaders);
    }
    if(this.detail) {
      $dara.Model.validateMap(this.detail);
    }
    if(Array.isArray(this.responseHeaders)) {
      $dara.Model.validateArray(this.responseHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDefenseResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 618F2626-DB27-5187-8C6C-4E61A491****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of protected objects.
   */
  resources?: DescribeDefenseResourcesResponseBodyResources[];
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 73
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resources: 'Resources',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resources: { 'type': 'array', 'itemType': DescribeDefenseResourcesResponseBodyResources },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

