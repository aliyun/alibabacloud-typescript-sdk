// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateResourceShareRequestResourceProperties extends $dara.Model {
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

export class AssociateResourceShareRequestResources extends $dara.Model {
  /**
   * @remarks
   * The ID of a shared resource.
   * 
   * Valid values of N: 1 to 5. This indicates that a maximum of five shared resources can be specified at a time.
   * 
   * >  Resources.N.ResourceId and Resources.N.ResourceType must be used in pairs.
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

export class AssociateResourceShareRequestTargetProperties extends $dara.Model {
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

export class AssociateResourceShareRequest extends $dara.Model {
  /**
   * @remarks
   * The information about the permissions. If you do not configure this parameter, the system automatically associates the default permission for the specified resource type with the resource share. For more information, see [Permission library](https://help.aliyun.com/document_detail/465474.html).
   */
  permissionNames?: string[];
  resourceArns?: string[];
  resourceProperties?: AssociateResourceShareRequestResourceProperties[];
  /**
   * @remarks
   * The ID of the resource share.
   * 
   * This parameter is required.
   * 
   * @example
   * rs-6GRmdD3X****
   */
  resourceShareId?: string;
  /**
   * @remarks
   * The information about the resources.
   */
  resources?: AssociateResourceShareRequestResources[];
  /**
   * @remarks
   * The properties of the principal.
   * 
   * >  This parameter is available only when you specify an Alibaba Cloud service as a principal.
   */
  targetProperties?: AssociateResourceShareRequestTargetProperties[];
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
      permissionNames: 'PermissionNames',
      resourceArns: 'ResourceArns',
      resourceProperties: 'ResourceProperties',
      resourceShareId: 'ResourceShareId',
      resources: 'Resources',
      targetProperties: 'TargetProperties',
      targets: 'Targets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      permissionNames: { 'type': 'array', 'itemType': 'string' },
      resourceArns: { 'type': 'array', 'itemType': 'string' },
      resourceProperties: { 'type': 'array', 'itemType': AssociateResourceShareRequestResourceProperties },
      resourceShareId: 'string',
      resources: { 'type': 'array', 'itemType': AssociateResourceShareRequestResources },
      targetProperties: { 'type': 'array', 'itemType': AssociateResourceShareRequestTargetProperties },
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

