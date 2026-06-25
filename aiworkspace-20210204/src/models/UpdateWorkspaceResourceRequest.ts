// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWorkspaceResourceRequestLabels extends $dara.Model {
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * system.******
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
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
   * Specifies whether to set the resource as the default resource for the workspace. Currently, only `true` is a valid value.
   * 
   * @example
   * true
   */
  isDefault?: boolean;
  /**
   * @remarks
   * An array of tags. The update affects only resources that have all of the specified tags.
   */
  labels?: UpdateWorkspaceResourceRequestLabels[];
  /**
   * @remarks
   * **This parameter is deprecated. Use `ResourceType` instead.**
   * 
   * @example
   * MaxCompute
   */
  productType?: string;
  /**
   * @remarks
   * An array of resource IDs.
   * 
   * You cannot leave both `GroupName` and `ResourceIds` empty. If you specify both parameters, the group name must be the same for all specified resource IDs.
   */
  resourceIds?: string[];
  /**
   * @remarks
   * The resource type. Valid values are:
   * 
   * - MaxCompute: MaxCompute resources.
   * 
   * - ECS: General-purpose computing resources.
   * 
   * - Lingjun: Lingjun intelligent computing resources.
   * 
   * - ACS: ACS computing resources.
   * 
   * - Flink: Flink resources.
   * 
   * - SelfManagedAckPro: Resources for self-managed ACK Pro clusters.
   * 
   * - SelfManagedAckLingjun: Resources for self-managed ACK Lingjun clusters.
   * 
   * - SelfManagedASI: Resources for self-managed clusters on third-party clouds.
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

