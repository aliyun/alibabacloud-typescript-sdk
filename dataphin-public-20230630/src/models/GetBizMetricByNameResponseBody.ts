// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBizMetricByNameResponseBodyDataAssociatedTechMetrics extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * display name
   */
  displayName?: string;
  /**
   * @remarks
   * guid
   * 
   * @example
   * table1.a.b
   */
  guid?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * metric3
   */
  name?: string;
  /**
   * @remarks
   * The type of the technical metric. Valid values: INDEX: Modeling metric. CUSTOM_INDEX: Custom metric.
   * 
   * @example
   * CUSTOM_INDEX
   */
  subType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      guid: 'Guid',
      name: 'Name',
      subType: 'SubType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      guid: 'string',
      name: 'string',
      subType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizMetricByNameResponseBodyDataCatalogs extends $dara.Model {
  /**
   * @remarks
   * The description of the folder.
   * 
   * @example
   * catalog desc
   */
  catalogDesc?: string;
  /**
   * @remarks
   * The ID of the folder.
   * 
   * @example
   * 1561740764851842
   */
  catalogId?: number;
  /**
   * @remarks
   * The name of the folder.
   * 
   * @example
   * test catalog
   */
  catalogName?: string;
  /**
   * @remarks
   * The ID of the parent folder.
   * 
   * @example
   * 1561740764851841
   */
  parentCatalogId?: number;
  /**
   * @remarks
   * The path of the parent folder.
   * 
   * @example
   * /catalog1/
   */
  parentPath?: string;
  /**
   * @remarks
   * The ID of the topic to which the folder belongs.
   * 
   * @example
   * 43297700
   */
  topicId?: number;
  /**
   * @remarks
   * The name of the topic to which the folder belongs.
   * 
   * @example
   * test topic
   */
  topicName?: string;
  static names(): { [key: string]: string } {
    return {
      catalogDesc: 'CatalogDesc',
      catalogId: 'CatalogId',
      catalogName: 'CatalogName',
      parentCatalogId: 'ParentCatalogId',
      parentPath: 'ParentPath',
      topicId: 'TopicId',
      topicName: 'TopicName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      catalogDesc: 'string',
      catalogId: 'number',
      catalogName: 'string',
      parentCatalogId: 'number',
      parentPath: 'string',
      topicId: 'number',
      topicName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizMetricByNameResponseBodyDataCustomAttribute extends $dara.Model {
  /**
   * @remarks
   * The custom attribute code.
   * 
   * @example
   * CustomAttributeCode
   */
  code?: string;
  /**
   * @remarks
   * The attribute value list: 1. For custom input and drop-down single-select attributes, the first attribute value in the list is used. 2. For drop-down multi-select attributes, all attribute values in the list are used. 3. For hyperlink attributes, the first attribute value in the list is the display text, and the second attribute value is the redirect link.
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

export class GetBizMetricByNameResponseBodyDataRelatedBizMetrics extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * display name
   */
  displayName?: string;
  /**
   * @remarks
   * guid
   * 
   * @example
   * test
   */
  guid?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * Metric2
   */
  name?: string;
  /**
   * @remarks
   * The relationship type. Valid values: POSITIVE: Positive correlation. NEGATIVE: Negative correlation. OTHER: Other.
   * 
   * @example
   * POSITIVE
   */
  relationType?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      displayName: 'DisplayName',
      guid: 'Guid',
      name: 'Name',
      relationType: 'RelationType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      displayName: 'string',
      guid: 'string',
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

export class GetBizMetricByNameResponseBodyDataViewScope extends $dara.Model {
  /**
   * @remarks
   * The type of the visibility scope. Valid values: ALL_USERS_CAN_VIEW: Visible to all users. PART_USERS_CAN_VIEW: Visible to specific users. PART_USERS_CAN_NOT_VIEW: Invisible to specific users.
   * 
   * @example
   * PART_USERS_CAN_NOT_VIEW
   */
  scopeType?: string;
  /**
   * @remarks
   * The names of the user groups. This parameter is valid only when the visibility scope of the asset is set to Visible to specific users or Invisible to specific users.
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

export class GetBizMetricByNameResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of associated technical metrics.
   */
  associatedTechMetrics?: GetBizMetricByNameResponseBodyDataAssociatedTechMetrics[];
  /**
   * @remarks
   * The name of the business owner.
   * 
   * @example
   * SuperAdmin
   */
  bizOwnerName?: string;
  /**
   * @remarks
   * The list of associated folders.
   */
  catalogs?: GetBizMetricByNameResponseBodyDataCatalogs[];
  /**
   * @remarks
   * The custom attribute list.
   */
  customAttribute?: GetBizMetricByNameResponseBodyDataCustomAttribute[];
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
   * Metric Display Name
   */
  displayName?: string;
  /**
   * @remarks
   * The GUID of the business metric.
   * 
   * @example
   * guid
   */
  guid?: string;
  /**
   * @remarks
   * The list of labels.
   */
  labels?: string[];
  /**
   * @remarks
   * The definition of the metric.
   * 
   * @example
   * [Metric1]+[Metric2]
   */
  metricDefinition?: string;
  /**
   * @remarks
   * The expression of the metric relationship diagram.
   * 
   * @example
   * [Metric2]*10
   */
  metricRelationDiagramExpression?: string;
  /**
   * @remarks
   * Indicates whether the metric relationship diagram is enabled. Valid values: true: Enabled. false: Disabled.
   * 
   * @example
   * true
   */
  metricRelationDiagramSwitchOpen?: boolean;
  /**
   * @remarks
   * The name of the business metric.
   * 
   * @example
   * Metric1
   */
  name?: string;
  /**
   * @remarks
   * The text content of the usage instructions.
   * 
   * @example
   * content
   */
  operateInstructionContent?: string;
  /**
   * @remarks
   * Indicates whether the usage instructions are enabled. Valid values: true: Enabled. false: Disabled.
   * 
   * @example
   * true
   */
  operateInstructionEnabled?: boolean;
  /**
   * @remarks
   * The list of related business metrics.
   */
  relatedBizMetrics?: GetBizMetricByNameResponseBodyDataRelatedBizMetrics[];
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 30001011
   */
  tenantId?: number;
  /**
   * @remarks
   * The visibility scope.
   */
  viewScope?: GetBizMetricByNameResponseBodyDataViewScope;
  static names(): { [key: string]: string } {
    return {
      associatedTechMetrics: 'AssociatedTechMetrics',
      bizOwnerName: 'BizOwnerName',
      catalogs: 'Catalogs',
      customAttribute: 'CustomAttribute',
      description: 'Description',
      displayName: 'DisplayName',
      guid: 'Guid',
      labels: 'Labels',
      metricDefinition: 'MetricDefinition',
      metricRelationDiagramExpression: 'MetricRelationDiagramExpression',
      metricRelationDiagramSwitchOpen: 'MetricRelationDiagramSwitchOpen',
      name: 'Name',
      operateInstructionContent: 'OperateInstructionContent',
      operateInstructionEnabled: 'OperateInstructionEnabled',
      relatedBizMetrics: 'RelatedBizMetrics',
      tenantId: 'TenantId',
      viewScope: 'ViewScope',
    };
  }

  static types(): { [key: string]: any } {
    return {
      associatedTechMetrics: { 'type': 'array', 'itemType': GetBizMetricByNameResponseBodyDataAssociatedTechMetrics },
      bizOwnerName: 'string',
      catalogs: { 'type': 'array', 'itemType': GetBizMetricByNameResponseBodyDataCatalogs },
      customAttribute: { 'type': 'array', 'itemType': GetBizMetricByNameResponseBodyDataCustomAttribute },
      description: 'string',
      displayName: 'string',
      guid: 'string',
      labels: { 'type': 'array', 'itemType': 'string' },
      metricDefinition: 'string',
      metricRelationDiagramExpression: 'string',
      metricRelationDiagramSwitchOpen: 'boolean',
      name: 'string',
      operateInstructionContent: 'string',
      operateInstructionEnabled: 'boolean',
      relatedBizMetrics: { 'type': 'array', 'itemType': GetBizMetricByNameResponseBodyDataRelatedBizMetrics },
      tenantId: 'number',
      viewScope: GetBizMetricByNameResponseBodyDataViewScope,
    };
  }

  validate() {
    if(Array.isArray(this.associatedTechMetrics)) {
      $dara.Model.validateArray(this.associatedTechMetrics);
    }
    if(Array.isArray(this.catalogs)) {
      $dara.Model.validateArray(this.catalogs);
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

export class GetBizMetricByNameResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The business metric details.
   */
  data?: GetBizMetricByNameResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The details of the backend exception.
   * 
   * @example
   * SUCCESS
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetBizMetricByNameResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

