// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishKgSchemaRequestPublishCommandDataAdjustmentPoliciesBackFillDefaultValuePolicy extends $dara.Model {
  /**
   * @remarks
   * The default value to backfill for the property.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  defaultValue?: string;
  /**
   * @remarks
   * The property code.
   * 
   * This parameter is required.
   * 
   * @example
   * name
   */
  propertyCode?: string;
  static names(): { [key: string]: string } {
    return {
      defaultValue: 'DefaultValue',
      propertyCode: 'PropertyCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultValue: 'string',
      propertyCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishKgSchemaRequestPublishCommandDataAdjustmentPolicies extends $dara.Model {
  /**
   * @remarks
   * The backfill property default value policy. This parameter takes effect only when PolicyType is set to BackFillDefault.
   * 
   * This parameter is required.
   */
  backFillDefaultValuePolicy?: PublishKgSchemaRequestPublishCommandDataAdjustmentPoliciesBackFillDefaultValuePolicy;
  /**
   * @remarks
   * The policy type. Valid values:
   * 
   * - BackFillDefault: backfills default values when a property changes from optional to required.
   * 
   * This parameter is required.
   * 
   * @example
   * BackFillDefault
   */
  policyType?: string;
  /**
   * @remarks
   * The type to which the policy applies. Valid values:
   * 
   * - ENTITY: applies to entity types.
   * - RELATION: applies to relation types.
   * 
   * This parameter is required.
   * 
   * @example
   * ENTITY
   */
  type?: string;
  /**
   * @remarks
   * The code of the entity type or relation type.
   * 
   * This parameter is required.
   * 
   * @example
   * Product
   */
  typeCode?: string;
  static names(): { [key: string]: string } {
    return {
      backFillDefaultValuePolicy: 'BackFillDefaultValuePolicy',
      policyType: 'PolicyType',
      type: 'Type',
      typeCode: 'TypeCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backFillDefaultValuePolicy: PublishKgSchemaRequestPublishCommandDataAdjustmentPoliciesBackFillDefaultValuePolicy,
      policyType: 'string',
      type: 'string',
      typeCode: 'string',
    };
  }

  validate() {
    if(this.backFillDefaultValuePolicy && typeof (this.backFillDefaultValuePolicy as any).validate === 'function') {
      (this.backFillDefaultValuePolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishKgSchemaRequestPublishCommand extends $dara.Model {
  /**
   * @remarks
   * The data adjustment policies.
   */
  dataAdjustmentPolicies?: PublishKgSchemaRequestPublishCommandDataAdjustmentPolicies[];
  /**
   * @remarks
   * The description.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  description?: string;
  static names(): { [key: string]: string } {
    return {
      dataAdjustmentPolicies: 'DataAdjustmentPolicies',
      description: 'Description',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataAdjustmentPolicies: { 'type': 'array', 'itemType': PublishKgSchemaRequestPublishCommandDataAdjustmentPolicies },
      description: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataAdjustmentPolicies)) {
      $dara.Model.validateArray(this.dataAdjustmentPolicies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishKgSchemaRequest extends $dara.Model {
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
   * The publish command and its details.
   * 
   * This parameter is required.
   */
  publishCommand?: PublishKgSchemaRequestPublishCommand;
  /**
   * @remarks
   * The model ID.
   * 
   * This parameter is required.
   * 
   * @example
   * f1d4559a4db044158305e2d89bccf81f
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      publishCommand: 'PublishCommand',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      publishCommand: PublishKgSchemaRequestPublishCommand,
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.publishCommand && typeof (this.publishCommand as any).validate === 'function') {
      (this.publishCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

