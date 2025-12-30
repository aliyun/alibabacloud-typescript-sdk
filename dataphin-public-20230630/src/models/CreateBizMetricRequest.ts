// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBizMetricRequestCreateBizMetricCommandCustomAttribute extends $dara.Model {
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

export class CreateBizMetricRequestCreateBizMetricCommandRelatedBizMetrics extends $dara.Model {
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
   * @example
   * PART_USERS_CAN_VIEW
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

export class CreateBizMetricRequestCreateBizMetricCommand extends $dara.Model {
  associatedTechMetricFullNames?: string[];
  /**
   * @example
   * SuperAdmin
   */
  bizOwnerName?: string;
  catalogIds?: number[];
  customAttribute?: CreateBizMetricRequestCreateBizMetricCommandCustomAttribute[];
  /**
   * @example
   * MetricDesc
   */
  description?: string;
  /**
   * @example
   * MetricDisplayName
   */
  displayName?: string;
  labels?: string[];
  /**
   * @example
   * [Metric1]+[Metric2]
   */
  metricDefinition?: string;
  /**
   * @example
   * [Metric1]+[Metric2]
   */
  metricRelationDiagramExpression?: string;
  /**
   * @example
   * true
   */
  metricRelationDiagramSwitchOpen?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
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
  relatedBizMetrics?: CreateBizMetricRequestCreateBizMetricCommandRelatedBizMetrics[];
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
   * This parameter is required.
   */
  createBizMetricCommand?: CreateBizMetricRequestCreateBizMetricCommand;
  /**
   * @remarks
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

