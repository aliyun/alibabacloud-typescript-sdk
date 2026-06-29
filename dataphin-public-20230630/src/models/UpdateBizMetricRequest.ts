// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBizMetricRequestUpdateBizMetricCommandCustomAttribute extends $dara.Model {
  /**
   * @remarks
   * Custom attribute code
   * 
   * @example
   * CustomAttributeCode
   */
  code?: string;
  /**
   * @remarks
   * List of attribute values. 1. For custom input and single-select dropdown attributes, only the first value in the list is read. 2. For multi-select dropdown attributes, all values in the list are read. 3. For hyperlink attributes, the first value is used as the display text and the second value is used as the link URL.
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
   * Business metric name
   * 
   * @example
   * Metric2
   */
  name?: string;
  /**
   * @remarks
   * Correlation type. Valid values: POSITIVE (positive correlation), NEGATIVE (negative correlation), and OTHER (other)
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
   * Visibility scope type. Valid values: ALL_USERS_CAN_VIEW (visible to all users), PART_USERS_CAN_VIEW (visible to specified users), and PART_USERS_CAN_NOT_VIEW (invisible to specified users)
   * 
   * @example
   * ALL_USERS_CAN_VIEW
   */
  scopeType?: string;
  /**
   * @remarks
   * Enter user group names. This parameter is read only when the visibility scope is set to PART_USERS_CAN_VIEW or PART_USERS_CAN_NOT_VIEW
   */
  userGroupNames?: string[];
  /**
   * @remarks
   * Enter the usernames of individual accounts. This parameter takes effect only when the visibility scope is set to PART_USERS_CAN_VIEW or PART_USERS_CAN_NOT_VIEW
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
   * List of associated technical metrics. Enter the full name of the technical metric in the format of "TableFullName.MetricName", where "TableFullName" equals "AssetSource.TableName". A technical metric can only be associated with one business metric and cannot be associated repeatedly
   */
  associatedTechMetricFullNames?: string[];
  /**
   * @remarks
   * Business owner. Enter the username of the owner account
   * 
   * @example
   * SuperAdmin
   */
  bizOwnerName?: string;
  /**
   * @remarks
   * List of catalog IDs
   */
  catalogIds?: number[];
  /**
   * @remarks
   * List of custom attributes. Enter the attribute code and attribute values for each
   */
  customAttribute?: UpdateBizMetricRequestUpdateBizMetricCommandCustomAttribute[];
  /**
   * @remarks
   * Description
   * 
   * @example
   * Metric Desc
   */
  description?: string;
  /**
   * @remarks
   * Display name
   * 
   * @example
   * Metric1_DisplayName
   */
  displayName?: string;
  /**
   * @remarks
   * Asset labels
   */
  labels?: string[];
  /**
   * @remarks
   * Metric definition. To reference other business metrics, enclose the metric name in square brackets [ ]
   * 
   * @example
   * [Metric2]+[Metric3]
   */
  metricDefinition?: string;
  /**
   * @remarks
   * This parameter is read only when the metric relationship diagram is enabled. Only a calculation expression composed of metric names selected from related business metrics is supported. Supported operators include +, -, *, /, (), %, and ∑. Each metric name must be enclosed in square brackets [ ]. If no operator is specified between two metrics, the system automatically fills in a placeholder. If no metric relationship expression is configured, the metric relationship diagram switch is automatically disabled
   * 
   * @example
   * [Metric1]+[Metric2]
   */
  metricRelationDiagramExpression?: string;
  /**
   * @remarks
   * Metric relationship diagram switch. Valid values: true (enabled) and false (disabled). This can be enabled only when at least one related business metric exists. Otherwise, it is automatically disabled
   * 
   * @example
   * true
   */
  metricRelationDiagramSwitchOpen?: boolean;
  /**
   * @remarks
   * Enter the name of the business metric to update
   * 
   * This parameter is required.
   * 
   * @example
   * Metric1
   */
  name?: string;
  /**
   * @remarks
   * The new name. Enter this when you need to modify the metric name
   * 
   * @example
   * Metric1_new
   */
  newName?: string;
  /**
   * @remarks
   * Content of the usage instructions. Only text format is supported
   * 
   * @example
   * content test
   */
  operateInstructionContent?: string;
  /**
   * @remarks
   * Specifies whether the usage instructions are enabled. Valid values: true (enabled) and false (disabled)
   * 
   * @example
   * true
   */
  operateInstructionEnabled?: boolean;
  /**
   * @remarks
   * List of related business metrics
   */
  relatedBizMetrics?: UpdateBizMetricRequestUpdateBizMetricCommandRelatedBizMetrics[];
  /**
   * @remarks
   * Visibility scope
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
   * Tenant ID
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * Update request
   * 
   * This parameter is required.
   */
  updateBizMetricCommand?: UpdateBizMetricRequestUpdateBizMetricCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateBizMetricCommand: 'UpdateBizMetricCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
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

