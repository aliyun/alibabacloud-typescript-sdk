// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseResourcesResponseBodyResourcesResponseHeaders extends $dara.Model {
  /**
   * @remarks
   * Specifies the key for a custom response header.
   * 
   * @example
   * Header-Key
   */
  key?: string;
  /**
   * @remarks
   * Specifies the value for a custom response header.
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
   * The status of the tracking cookie.
   * 
   * *   **0**: disabled
   * *   **1**: enabled. This is the default value.
   * 
   * @example
   * 1
   */
  acwCookieStatus?: number;
  /**
   * @remarks
   * The status of the secure attribute of the tracking cookie.
   * 
   * *   **0**: disabled. This is the default value.
   * *   **1**: enabled.
   * 
   * @example
   * 0
   */
  acwSecureStatus?: number;
  /**
   * @remarks
   * The status of the secure attribute of the slider CAPTCHA cookie.
   * 
   * *   **0**: disabled. This is the default value.
   * *   **1**: enabled.
   * 
   * @example
   * 0
   */
  acwV3SecureStatus?: number;
  /**
   * @remarks
   * The custom header fields that are used to identify the originating IP addresses of clients. If the value of XffStatus is 1 and CustomHeaders is left empty, the first IP addresses in the XFF header fields are used as the originating IP addresses of clients.
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
   * The description of the protected object. Different key-value pairs in a map indicate different properties of the protected object.
   */
  detail?: { [key: string]: any };
  /**
   * @remarks
   * The creation time of the protected object. Unit: seconds.
   * 
   * @example
   * 1652149203187
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The most recent modification time of the protected object. Unit: seconds.
   * 
   * @example
   * 1665633032000
   */
  gmtModified?: number;
  /**
   * @remarks
   * The Alibaba Cloud account to which the protected object belongs. You can specify this parameter to query protected objects that belong to a specific Alibaba Cloud account. Exact match is supported.
   * 
   * @example
   * 135*********46
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The protection pattern.
   * 
   * @example
   * domain
   */
  pattern?: string;
  /**
   * @remarks
   * The name of the cloud service.
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
   * The name of the protected object group to which the protected object belongs.
   * 
   * @example
   * test
   */
  resourceGroup?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfm***q
   */
  resourceManagerResourceGroupId?: string;
  /**
   * @remarks
   * The origin of the protected object.
   * 
   * @example
   * custom
   */
  resourceOrigin?: string;
  /**
   * @remarks
   * The response header.
   */
  responseHeaders?: DescribeDefenseResourcesResponseBodyResourcesResponseHeaders[];
  /**
   * @remarks
   * Indicates whether the X-Forwarded-For (XFF) header is used.
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
   * 618F2626-DB27-5187-8C6C-4E61A491DF29
   */
  requestId?: string;
  /**
   * @remarks
   * The protected objects.
   */
  resources?: DescribeDefenseResourcesResponseBodyResources[];
  /**
   * @remarks
   * The total number of entries that are returned.
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

