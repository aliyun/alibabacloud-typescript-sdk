// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBizMetricRequestUpdateBizMetricCommandCustomAttribute extends $dara.Model {
  /**
   * @remarks
   * The code of the custom attribute.
   * 
   * @example
   * CustomAttributeCode
   */
  code?: string;
  /**
   * @remarks
   * The attribute values. 1. For custom input and drop-down single-select attributes, only the first attribute value in the list is read. 2. For drop-down multi-select attributes, all attribute values in the list are read. 3. For hyperlink attributes, the first attribute value in the list is read as the display text, and the second attribute value is read as the redirect link.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizMetricRequestUpdateBizMetricCommandRelatedBizMetrics extends $dara.Model {
  /**
   * @remarks
   * The name of the business metric.
   * 
   * @example
   * Metric2
   */
  name?: string;
  /**
   * @remarks
   * The relationship type. Valid values:
   * - POSITIVE: Positive correlation.
   * - NEGATIVE: Negative correlation.
   * - OTHER: Other.
   * 
   * @example
   * POSITIVE
   */
  relationType?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      relationType: 'RelationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      relationType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizMetricRequestUpdateBizMetricCommandViewScope extends $dara.Model {
  /**
   * @remarks
   * The visibility scope type. Valid values:
   * - ALL_USERS_CAN_VIEW: Visible to all users.
   * - PART_USERS_CAN_VIEW: Visible to specific users.
   * - PART_USERS_CAN_NOT_VIEW: Invisible to specific users.
   * 
   * @example
   * ALL_USERS_CAN_VIEW
   */
  scopeType?: string;
  /**
   * @remarks
   * The user group names. This parameter is read only when the visibility scope of the asset is set to Visible to specific users or Invisible to specific users.
   */
  userGroupNames?: string[];
  /**
   * @remarks
   * The usernames of individual accounts. This parameter is valid only when the visibility scope of the asset is set to Visible to specific users or Invisible to specific users.
   */
  userNames?: string[];
  static names(): { [key: string]: string } {
    return {
      scopeType: 'ScopeType',
      userGroupNames: 'UserGroupNames',
      userNames: 'UserNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      scopeType: 'string',
      userGroupNames: { 'type': 'array', 'itemType': 'string' },
      userNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userGroupNames)) {
      $dara.Model.validateArray(this.userGroupNames);
    }
    if(Array.isArray(this.userNames)) {
      $dara.Model.validateArray(this.userNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizMetricRequestUpdateBizMetricCommand extends $dara.Model {
  /**
   * @remarks
   * The associated technical metrics. Enter the technical metric in the "Full table name.Metric name" format, where the "Full table name" is equal to "Asset source.Table name". A technical metric can be associated with only one business metric and cannot be repeatedly associated.
   */
  associatedTechMetricFullNames?: string[];
  /**
   * @remarks
   * The business owner. Enter the username of the owner\\"s account.
   * 
   * @example
   * SuperAdmin
   */
  bizOwnerName?: string;
  /**
   * @remarks
   * The IDs of the parent folders.
   */
  catalogIds?: number[];
  /**
   * @remarks
   * The custom attributes. Enter the attribute code and attribute value separately.
   */
  customAttribute?: UpdateBizMetricRequestUpdateBizMetricCommandCustomAttribute[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Metric Desc
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * Metric1_DisplayName
   */
  displayName?: string;
  /**
   * @remarks
   * The asset labels.
   */
  labels?: string[];
  /**
   * @remarks
   * The metric definition. To reference other business metrics, enclose the metric names in half-width square brackets [].
   * 
   * @example
   * [Metric2]+[Metric3]
   */
  metricDefinition?: string;
  /**
   * @remarks
   * The expression for the metric relationship diagram. This parameter is read only when the metric relationship diagram is enabled. You can only enter a calculation expression composed of metric names selected from the related business metrics. The supported operators are +, -, *, /, (), %, and ∑. Each metric name must be enclosed in half-width square brackets []. If no operator is specified between two metrics, the system automatically adds padding as a placeholder. If the metric relational expression is not configured, a shutdown of the metric relationship diagram switch is automatically triggered.
   * 
   * @example
   * [Metric1]+[Metric2]
   */
  metricRelationDiagramExpression?: string;
  /**
   * @remarks
   * Specifies whether to enable the metric relationship diagram. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * This switch can be enabled only when at least one related business metric exists. Otherwise, it is automatically disabled.
   * 
   * @example
   * true
   */
  metricRelationDiagramSwitchOpen?: boolean;
  /**
   * @remarks
   * The name of the business metric to update.
   * 
   * This parameter is required.
   * 
   * @example
   * Metric1
   */
  name?: string;
  /**
   * @remarks
   * The new name. Specify this parameter when you need to modify the metric name.
   * 
   * @example
   * Metric1_new
   */
  newName?: string;
  /**
   * @remarks
   * The content of the usage instructions. Only text format is supported.
   * 
   * @example
   * content test
   */
  operateInstructionContent?: string;
  /**
   * @remarks
   * Specifies whether to enable the usage instructions. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  operateInstructionEnabled?: boolean;
  /**
   * @remarks
   * The related business metrics.
   */
  relatedBizMetrics?: UpdateBizMetricRequestUpdateBizMetricCommandRelatedBizMetrics[];
  /**
   * @remarks
   * The visibility scope.
   */
  viewScope?: UpdateBizMetricRequestUpdateBizMetricCommandViewScope;
  static names(): { [key: string]: string } {
    return {
      associatedTechMetricFullNames: 'AssociatedTechMetricFullNames',
      bizOwnerName: 'BizOwnerName',
      catalogIds: 'CatalogIds',
      customAttribute: 'CustomAttribute',
      description: 'Description',
      displayName: 'DisplayName',
      labels: 'Labels',
      metricDefinition: 'MetricDefinition',
      metricRelationDiagramExpression: 'MetricRelationDiagramExpression',
      metricRelationDiagramSwitchOpen: 'MetricRelationDiagramSwitchOpen',
      name: 'Name',
      newName: 'NewName',
      operateInstructionContent: 'OperateInstructionContent',
      operateInstructionEnabled: 'OperateInstructionEnabled',
      relatedBizMetrics: 'RelatedBizMetrics',
      viewScope: 'ViewScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedTechMetricFullNames: { 'type': 'array', 'itemType': 'string' },
      bizOwnerName: 'string',
      catalogIds: { 'type': 'array', 'itemType': 'number' },
      customAttribute: { 'type': 'array', 'itemType': UpdateBizMetricRequestUpdateBizMetricCommandCustomAttribute },
      description: 'string',
      displayName: 'string',
      labels: { 'type': 'array', 'itemType': 'string' },
      metricDefinition: 'string',
      metricRelationDiagramExpression: 'string',
      metricRelationDiagramSwitchOpen: 'boolean',
      name: 'string',
      newName: 'string',
      operateInstructionContent: 'string',
      operateInstructionEnabled: 'boolean',
      relatedBizMetrics: { 'type': 'array', 'itemType': UpdateBizMetricRequestUpdateBizMetricCommandRelatedBizMetrics },
      viewScope: UpdateBizMetricRequestUpdateBizMetricCommandViewScope,
    };
  }

  validate() {
    if(Array.isArray(this.associatedTechMetricFullNames)) {
      $dara.Model.validateArray(this.associatedTechMetricFullNames);
    }
    if(Array.isArray(this.catalogIds)) {
      $dara.Model.validateArray(this.catalogIds);
    }
    if(Array.isArray(this.customAttribute)) {
      $dara.Model.validateArray(this.customAttribute);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(Array.isArray(this.relatedBizMetrics)) {
      $dara.Model.validateArray(this.relatedBizMetrics);
    }
    if(this.viewScope && typeof (this.viewScope as any).validate === 'function') {
      (this.viewScope as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateBizMetricRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The ID of the operator.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
  /**
   * @remarks
   * The update request.
   * 
   * This parameter is required.
   */
  updateBizMetricCommand?: UpdateBizMetricRequestUpdateBizMetricCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      opUserId: 'OpUserId',
      updateBizMetricCommand: 'UpdateBizMetricCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
      updateBizMetricCommand: UpdateBizMetricRequestUpdateBizMetricCommand,
    };
  }

  validate() {
    if(this.updateBizMetricCommand && typeof (this.updateBizMetricCommand as any).validate === 'function') {
      (this.updateBizMetricCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

