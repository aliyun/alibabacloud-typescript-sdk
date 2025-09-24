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
   * Specifies whether the resource is the default resource. This parameter can only be set to true and cannot be set to false.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * The resource tags. If you specify multiple tags, only resources that meet all the specified tag-based filter conditions are returned.
   */
  labels?: UpdateWorkspaceResourceRequestLabels[];
  /**
   * @remarks
   * **This field is no longer used and will be removed. Use the ResourceType field.
   * 
   * @example
   * MaxCompute
   */
  productType?: string;
  /**
   * @remarks
   * The resource IDs.
   * 
   * You cannot leave both GroupName and ResourceIds empty. If you specify both the parameters, the value of GroupName of each resource ID in the dataset must be the same.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The resource type. Valid values:
   * 
   * *   MaxCompute
   * *   ECS
   * *   Lingjun
   * *   ACS
   * *   FLINK
   * 
   * @example
   * MaxCompute
   */
  resourceType?: string;
  /**
   * @remarks
   * The specification of the resource.
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

