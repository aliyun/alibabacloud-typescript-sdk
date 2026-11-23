// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkspaceResourceRequestLabels extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * system.******
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * True
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

export class UpdateWorkspaceResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * group-kjds******sd
   */
  groupName?: string;
  /**
   * @remarks
   * Specifies whether the resource is the default resource. Currently, you can set this parameter only to true. The value false is not supported.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The collection of resource tags. If multiple tags are specified, only resources that have all the specified tags are returned.
   */
  labels?: UpdateWorkspaceResourceRequestLabels[];
  /**
   * @remarks
   * **[Deprecated]** This field is deprecated and will be taken offline. Use the ResourceType field instead.
   * 
   * @example
   * MaxCompute
   */
  productType?: string;
  /**
   * @remarks
   * The collection of resource IDs. GroupName and ResourceIds cannot be both empty, but they can be both specified. If both are specified, the GroupName of each resource ID in the collection must be the same.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The list of resource types. Valid values:
   * 
   * - MaxCompute: MaxCompute big data compute EPS resources
   * - ECS: general-purpose compute resources
   * - Lingjun: Lingjun AI computing resources
   * - ACS: ACS compute resources
   * - FLINK: Flink resources
   * - SelfManagedAckPro: ACK Pro unified management cluster resources
   * - SelfManagedAckLingjun: ACK Lingjun unified management cluster resources
   * - SelfManagedASI: ASI unified management cluster resources (third-party cloud)
   * 
   * @example
   * MaxCompute
   */
  resourceType?: string;
  /**
   * @remarks
   * The specifications of the resource.
   * 
   * @example
   * {
   *       "clusterType": "share"
   * }
   */
  spec?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      isDefault: 'IsDefault',
      labels: 'Labels',
      productType: 'ProductType',
      resourceIds: 'ResourceIds',
      resourceType: 'ResourceType',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      isDefault: 'boolean',
      labels: { 'type': 'array', 'itemType': UpdateWorkspaceResourceRequestLabels },
      productType: 'string',
      resourceIds: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      spec: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.resourceIds)) {
      $dara.Model.validateArray(this.resourceIds);
    }
    if(this.spec) {
      $dara.Model.validateMap(this.spec);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

