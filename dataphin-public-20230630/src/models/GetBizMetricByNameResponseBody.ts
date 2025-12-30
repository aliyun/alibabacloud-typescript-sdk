// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBizMetricByNameResponseBodyDataAssociatedTechMetrics extends $dara.Model {
  /**
   * @example
   * desc
   */
  description?: string;
  /**
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
   * @example
   * metric3
   */
  name?: string;
  /**
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
   * @example
   * catalog desc
   */
  catalogDesc?: string;
  /**
   * @example
   * 1561740764851842
   */
  catalogId?: number;
  /**
   * @example
   * test catalog
   */
  catalogName?: string;
  /**
   * @example
   * 1561740764851841
   */
  parentCatalogId?: number;
  /**
   * @example
   * /catalog1/
   */
  parentPath?: string;
  /**
   * @example
   * 43297700
   */
  topicId?: number;
  /**
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
   * @example
   * CustomAttributeCode
   */
  code?: string;
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
   * @example
   * desc
   */
  description?: string;
  /**
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
   * @example
   * Metric2
   */
  name?: string;
  /**
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
   * @example
   * PART_USERS_CAN_NOT_VIEW
   */
  scopeType?: string;
  userGroupNames?: string[];
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
  associatedTechMetrics?: GetBizMetricByNameResponseBodyDataAssociatedTechMetrics[];
  /**
   * @example
   * SuperAdmin
   */
  bizOwnerName?: string;
  catalogs?: GetBizMetricByNameResponseBodyDataCatalogs[];
  customAttribute?: GetBizMetricByNameResponseBodyDataCustomAttribute[];
  /**
   * @example
   * Metric Desc
   */
  description?: string;
  /**
   * @example
   * Metric Display Name
   */
  displayName?: string;
  /**
   * @example
   * guid
   */
  guid?: string;
  labels?: string[];
  /**
   * @example
   * [Metric1]+[Metric2]
   */
  metricDefinition?: string;
  /**
   * @example
   * [Metric2]*10
   */
  metricRelationDiagramExpression?: string;
  /**
   * @example
   * true
   */
  metricRelationDiagramSwitchOpen?: boolean;
  /**
   * @example
   * Metric1
   */
  name?: string;
  /**
   * @example
   * content
   */
  operateInstructionContent?: string;
  /**
   * @example
   * true
   */
  operateInstructionEnabled?: boolean;
  relatedBizMetrics?: GetBizMetricByNameResponseBodyDataRelatedBizMetrics[];
  /**
   * @example
   * 30001011
   */
  tenantId?: number;
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
   * @example
   * OK
   */
  code?: string;
  data?: GetBizMetricByNameResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
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

