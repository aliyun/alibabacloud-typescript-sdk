// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourceShareRequestResourceProperties extends $dara.Model {
  /**
   * @example
   * {"sharePrincipals":true,"shareTagOptions":false}
   */
  property?: string;
  /**
   * @example
   * acs:vpc:cn-shanghai:103755469187****:vswitch/vsw-uf62b11ue4m8oz2di****
   */
  resourceArn?: string;
  static names(): { [key: string]: string } {
    return {
      property: 'Property',
      resourceArn: 'ResourceArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      property: 'string',
      resourceArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceShareRequestResources extends $dara.Model {
  /**
   * @remarks
   * The ID of a shared resource.
   * 
   * Valid values of N: 1 to 5. This indicates that a maximum of five shared resources can be specified at a time.
   * 
   * >  `Resources.N.ResourceId` and `Resources.N.ResourceType` must be used in pairs.
   * 
   * @example
   * vsw-bp183p93qs667muql****
   */
  resourceId?: string;
  /**
   * @remarks
   * The type of a shared resource.
   * 
   * Valid values of N: 1 to 5. This indicates that a maximum of five shared resources can be specified at a time.
   * 
   * For more information about the types of resources that can be shared, see [Services that work with Resource Sharing](https://help.aliyun.com/document_detail/450526.html).
   * 
   * >  `Resources.N.ResourceId` and `Resources.N.ResourceType` must be used in pairs.
   * 
   * @example
   * VSwitch
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceShareRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * >  The tag key can be up to 128 characters in length and cannot start with `acs:` or `aliyun`. The tag key cannot contain `http://` or `https://`.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * >  The tag value can be up to 128 characters in length and cannot start with `acs:`. The tag value cannot contain `http://` or `https://`.
   * 
   * @example
   * v1
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

export class CreateResourceShareRequestTargetProperties extends $dara.Model {
  /**
   * @remarks
   * The property parameter of the principal. For example, you can specify a parameter that indicates the time range for resource sharing. Valid values of `timeRangeType`:
   * 
   * *   timeRange: a specific time range
   * *   day: all day
   * 
   * >  `TargetProperties.N.TargetId` and `TargetProperties.N.Property` must be used in pairs.
   * 
   * @example
   * {
   *     "timeRange":{
   *         "timeRangeType":"timeRange",
   *         "beginAtTime":"00:00",
   *         "timezone":"UTC+8",
   *         "endAtTime":"19:59"
   *     }
   * }
   */
  property?: string;
  /**
   * @remarks
   * The ID of the principal.
   * 
   * >  `TargetProperties.N.TargetId` and `TargetProperties.N.Property` must be used in pairs.
   * 
   * @example
   * 172050525300****
   */
  targetId?: string;
  static names(): { [key: string]: string } {
    return {
      property: 'Property',
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      property: 'string',
      targetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateResourceShareRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether resources in the resource share can be shared with accounts outside the resource directory. Valid values:
   * 
   * *   false (default): Resources in the resource share can be shared only with accounts in the resource directory.
   * *   true: Resources in the resource share can be shared with both accounts in the resource directory and accounts outside the resource directory.
   * 
   * @example
   * false
   */
  allowExternalTargets?: boolean;
  /**
   * @remarks
   * The information about the permissions. If you do not configure this parameter, the system automatically associates the default permission for the specified resource type with the resource share. For more information, see [Permission library](https://help.aliyun.com/document_detail/465474.html).
   */
  permissionNames?: string[];
  resourceArns?: string[];
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-aekz5nlvlak****
   */
  resourceGroupId?: string;
  resourceProperties?: CreateResourceShareRequestResourceProperties[];
  /**
   * @remarks
   * The name of the resource share.
   * 
   * The name must be 1 to 50 characters in length.
   * 
   * The name can contain letters, digits, periods (.), underscores (_), and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  resourceShareName?: string;
  /**
   * @remarks
   * The information about the shared resources.
   */
  resources?: CreateResourceShareRequestResources[];
  /**
   * @remarks
   * The tags. You can specify up to 20 tags.
   */
  tag?: CreateResourceShareRequestTag[];
  /**
   * @remarks
   * The properties of the principal.
   * 
   * >  This parameter is available only when you specify an Alibaba Cloud service as a principal.
   */
  targetProperties?: CreateResourceShareRequestTargetProperties[];
  /**
   * @remarks
   * The information about the principals.
   * 
   * @example
   * 172050525300****
   */
  targets?: string[];
  static names(): { [key: string]: string } {
    return {
      allowExternalTargets: 'AllowExternalTargets',
      permissionNames: 'PermissionNames',
      resourceArns: 'ResourceArns',
      resourceGroupId: 'ResourceGroupId',
      resourceProperties: 'ResourceProperties',
      resourceShareName: 'ResourceShareName',
      resources: 'Resources',
      tag: 'Tag',
      targetProperties: 'TargetProperties',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allowExternalTargets: 'boolean',
      permissionNames: { 'type': 'array', 'itemType': 'string' },
      resourceArns: { 'type': 'array', 'itemType': 'string' },
      resourceGroupId: 'string',
      resourceProperties: { 'type': 'array', 'itemType': CreateResourceShareRequestResourceProperties },
      resourceShareName: 'string',
      resources: { 'type': 'array', 'itemType': CreateResourceShareRequestResources },
      tag: { 'type': 'array', 'itemType': CreateResourceShareRequestTag },
      targetProperties: { 'type': 'array', 'itemType': CreateResourceShareRequestTargetProperties },
      targets: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.permissionNames)) {
      $dara.Model.validateArray(this.permissionNames);
    }
    if(Array.isArray(this.resourceArns)) {
      $dara.Model.validateArray(this.resourceArns);
    }
    if(Array.isArray(this.resourceProperties)) {
      $dara.Model.validateArray(this.resourceProperties);
    }
    if(Array.isArray(this.resources)) {
      $dara.Model.validateArray(this.resources);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    if(Array.isArray(this.targetProperties)) {
      $dara.Model.validateArray(this.targetProperties);
    }
    if(Array.isArray(this.targets)) {
      $dara.Model.validateArray(this.targets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

