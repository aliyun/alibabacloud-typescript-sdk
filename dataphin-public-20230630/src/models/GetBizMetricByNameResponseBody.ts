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
   * The GUID.
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
   * The type of the technical metric. Valid values: INDEX (modeling metric) and CUSTOM_INDEX (custom metric).
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
   * The catalog description.
   * 
   * @example
   * catalog desc
   */
  catalogDesc?: string;
  /**
   * @remarks
   * The catalog ID.
   * 
   * @example
   * 1561740764851842
   */
  catalogId?: number;
  /**
   * @remarks
   * The catalog name.
   * 
   * @example
   * test catalog
   */
  catalogName?: string;
  /**
   * @remarks
   * The parent catalog ID.
   * 
   * @example
   * 1561740764851841
   */
  parentCatalogId?: number;
  /**
   * @remarks
   * The parent path of the catalog.
   * 
   * @example
   * /catalog1/
   */
  parentPath?: string;
  /**
   * @remarks
   * The topic ID to which the catalog belongs.
   * 
   * @example
   * 43297700
   */
  topicId?: number;
  /**
   * @remarks
   * The topic name to which the catalog belongs.
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
   * The code of the custom attribute.
   * 
   * @example
   * CustomAttributeCode
   */
  code?: string;
  /**
   * @remarks
   * The list of attribute values. 1. For custom input and single-select dropdown attributes, the first value in the list is used. 2. For multi-select dropdown attributes, all values in the list are used. 3. For hyperlink attributes, the first value is the display text and the second value is the link URL.
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
   * The GUID.
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
   * The relation type. Valid values: POSITIVE (positive correlation), NEGATIVE (negative correlation), and OTHER (other).
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
   * The type of view scope. Valid values: ALL_USERS_CAN_VIEW (visible to all users), PART_USERS_CAN_VIEW (visible to specific users), and PART_USERS_CAN_NOT_VIEW (invisible to specific users).
   * 
   * @example
   * PART_USERS_CAN_NOT_VIEW
   */
  scopeType?: string;
  /**
   * @remarks
   * The names of user groups. This parameter takes effect only when the view scope is set to PART_USERS_CAN_VIEW or PART_USERS_CAN_NOT_VIEW.
   */
  userGroupNames?: string[];
  /**
   * @remarks
   * The usernames of individual accounts. This parameter is valid only when the view scope is set to PART_USERS_CAN_VIEW or PART_USERS_CAN_NOT_VIEW.
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
   * The list of affiliated catalogs.
   */
  catalogs?: GetBizMetricByNameResponseBodyDataCatalogs[];
  /**
   * @remarks
   * The list of custom attributes.
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
   * The metric definition.
   * 
   * @example
   * [Metric1]+[Metric2]
   */
  metricDefinition?: string;
  /**
   * @remarks
   * The expression of the metric relation diagram.
   * 
   * @example
   * [Metric2]*10
   */
  metricRelationDiagramExpression?: string;
  /**
   * @remarks
   * Indicates whether the metric relation diagram is enabled. A value of true indicates that the diagram is enabled. A value of false indicates that the diagram is disabled.
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
   * The text content of the operation instruction.
   * 
   * @example
   * content
   */
  operateInstructionContent?: string;
  /**
   * @remarks
   * Indicates whether the operation instruction is enabled. A value of true indicates that the operation instruction is enabled. A value of false indicates that the operation instruction is disabled.
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
   * The view scope.
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
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The details of the business metric.
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
   * The error message.
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
   * Indicates whether the request was successful.
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

