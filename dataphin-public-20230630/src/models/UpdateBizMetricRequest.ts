// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBizMetricRequestUpdateBizMetricCommandCustomAttribute extends $dara.Model {
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

export class UpdateBizMetricRequestUpdateBizMetricCommandRelatedBizMetrics extends $dara.Model {
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

export class UpdateBizMetricRequestUpdateBizMetricCommandViewScope extends $dara.Model {
  /**
   * @example
   * ALL_USERS_CAN_VIEW
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

export class UpdateBizMetricRequestUpdateBizMetricCommand extends $dara.Model {
  associatedTechMetricFullNames?: string[];
  /**
   * @example
   * SuperAdmin
   */
  bizOwnerName?: string;
  catalogIds?: number[];
  customAttribute?: UpdateBizMetricRequestUpdateBizMetricCommandCustomAttribute[];
  /**
   * @example
   * Metric Desc
   */
  description?: string;
  /**
   * @example
   * Metric1_DisplayName
   */
  displayName?: string;
  labels?: string[];
  /**
   * @example
   * [Metric2]+[Metric3]
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
   * Metric1_new
   */
  newName?: string;
  /**
   * @example
   * content test
   */
  operateInstructionContent?: string;
  /**
   * @example
   * true
   */
  operateInstructionEnabled?: boolean;
  relatedBizMetrics?: UpdateBizMetricRequestUpdateBizMetricCommandRelatedBizMetrics[];
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
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
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

