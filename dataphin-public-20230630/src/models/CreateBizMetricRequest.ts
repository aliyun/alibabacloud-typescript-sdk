// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBizMetricRequestCreateBizMetricCommandCustomAttribute extends $dara.Model {
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
   * The list of attribute values. 1. For custom input and single-select dropdown attributes, only the first value in the list is read. 2. For multi-select dropdown attributes, all values in the list are read. 3. For hyperlink attributes, the first value is used as the display text and the second value is used as the redirect link.
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

export class CreateBizMetricRequestCreateBizMetricCommandRelatedBizMetrics extends $dara.Model {
  /**
   * @remarks
   * The metric name.
   * 
   * @example
   * Metric2
   */
  name?: string;
  /**
   * @remarks
   * The relationship type. Valid values:
   * - POSITIVE: positive correlation.
   * - NEGATIVE: negative correlation.
   * - OTHER: other.
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

export class CreateBizMetricRequestCreateBizMetricCommandViewScope extends $dara.Model {
  /**
   * @remarks
   * The visibility scope type. Valid values:
   * - ALL_USERS_CAN_VIEW: visible to all users.
   * - PART_USERS_CAN_VIEW: visible to specified users.
   * - PART_USERS_CAN_NOT_VIEW: not visible to specified users.
   * 
   * @example
   * PART_USERS_CAN_VIEW
   */
  scopeType?: string;
  /**
   * @remarks
   * The names of user groups. This parameter is read only when the visibility scope is set to PART_USERS_CAN_VIEW or PART_USERS_CAN_NOT_VIEW.
   */
  userGroupNames?: string[];
  /**
   * @remarks
   * The usernames of individual accounts. This parameter takes effect only when the visibility scope is set to PART_USERS_CAN_VIEW or PART_USERS_CAN_NOT_VIEW.
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

export class CreateBizMetricRequestCreateBizMetricCommand extends $dara.Model {
  /**
   * @remarks
   * The list of full names of associated technical metrics. Enter the full name in the format of "OwnerTableFullName.MetricName", where "OwnerTableFullName" equals "AssetSource.OwnerTableName". A technical metric can be associated with only one business metric and cannot be associated repeatedly.
   */
  associatedTechMetricFullNames?: string[];
  /**
   * @remarks
   * The name of the business owner. Enter the username of the owner account.
   * 
   * @example
   * SuperAdmin
   */
  bizOwnerName?: string;
  /**
   * @remarks
   * The IDs of the folders to which the metric belongs.
   */
  catalogIds?: number[];
  /**
   * @remarks
   * The custom attributes.
   */
  customAttribute?: CreateBizMetricRequestCreateBizMetricCommandCustomAttribute[];
  /**
   * @remarks
   * The description.
   * 
   * @example
   * MetricDesc
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * MetricDisplayName
   */
  displayName?: string;
  /**
   * @remarks
   * The asset labels.
   */
  labels?: string[];
  /**
   * @remarks
   * The metric definition. To reference other business metrics, enclose the metric name in square brackets [ ].
   * 
   * @example
   * [Metric1]+[Metric2]
   */
  metricDefinition?: string;
  /**
   * @remarks
   * This parameter is read only when the metric relationship diagram is enabled. Enter a calculation expression composed of metric names selected from the related business metrics. Supported operators include +, -, *, /, (, ), %, and ∑. Each metric name must be enclosed in square brackets [ ]. If no operator is specified between two metrics, the system automatically inserts a padding placeholder. If no metric relational expression is configured, the metric relationship diagram switch is automatically shutdown.
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
   * 
   * This parameter can be set to true only when at least one related business metric exists. Otherwise, the diagram is automatically disabled.
   * 
   * @example
   * true
   */
  metricRelationDiagramSwitchOpen?: boolean;
  /**
   * @remarks
   * The name of the business metric. The name must be unique within the tenant. The name can contain letters, digits, and the following special characters: -_/\\·#$^&*()%+=. The name can be up to 256 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * Metric1
   */
  name?: string;
  /**
   * @remarks
   * The content of the operation instructions. Only text format is supported.
   * 
   * @example
   * content
   */
  operateInstructionContent?: string;
  /**
   * @remarks
   * Specifies whether to enable the operation instructions. Valid values:
   * - true: Enabled.
   * - false: Disabled.
   * 
   * @example
   * true
   */
  operateInstructionEnabled?: boolean;
  /**
   * @remarks
   * The list of related business metrics. Enter the names of related business metrics and their relationships.
   */
  relatedBizMetrics?: CreateBizMetricRequestCreateBizMetricCommandRelatedBizMetrics[];
  /**
   * @remarks
   * The visibility scope.
   */
  viewScope?: CreateBizMetricRequestCreateBizMetricCommandViewScope;
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
      customAttribute: { 'type': 'array', 'itemType': CreateBizMetricRequestCreateBizMetricCommandCustomAttribute },
      description: 'string',
      displayName: 'string',
      labels: { 'type': 'array', 'itemType': 'string' },
      metricDefinition: 'string',
      metricRelationDiagramExpression: 'string',
      metricRelationDiagramSwitchOpen: 'boolean',
      name: 'string',
      operateInstructionContent: 'string',
      operateInstructionEnabled: 'boolean',
      relatedBizMetrics: { 'type': 'array', 'itemType': CreateBizMetricRequestCreateBizMetricCommandRelatedBizMetrics },
      viewScope: CreateBizMetricRequestCreateBizMetricCommandViewScope,
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

export class CreateBizMetricRequest extends $dara.Model {
  /**
   * @remarks
   * The create request.
   * 
   * This parameter is required.
   */
  createBizMetricCommand?: CreateBizMetricRequestCreateBizMetricCommand;
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
  static names(): { [key: string]: string } {
    return {
      createBizMetricCommand: 'CreateBizMetricCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createBizMetricCommand: CreateBizMetricRequestCreateBizMetricCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.createBizMetricCommand && typeof (this.createBizMetricCommand as any).validate === 'function') {
      (this.createBizMetricCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

