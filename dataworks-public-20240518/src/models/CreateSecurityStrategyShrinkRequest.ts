// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecurityStrategyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The idempotency parameter. This parameter is used to prevent duplicate operations caused by multiple calls.
   * 
   * @example
   * ABFUOEUOTRTRJKE
   */
  clientToken?: string;
  /**
   * @remarks
   * The policy content. The content is constrained by SecurityStrategySchema.
   * 
   * This parameter is required.
   */
  contentShrink?: string;
  /**
   * @remarks
   * The control scope.
   * 
   * This parameter is required.
   * 
   * @example
   * Tenant
   */
  controlDwScope?: string;
  /**
   * @remarks
   * The control module.
   * 
   * This parameter is required.
   * 
   * @example
   * DataQuery
   */
  controlModule?: string;
  /**
   * @remarks
   * The control submodule.
   * 
   * @example
   * MyCatalog
   */
  controlSubModule?: string;
  /**
   * @remarks
   * The description of the policy.
   * 
   * @example
   * Controls the security behavior of query results in the data analysis module
   */
  description?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * This parameter is required.
   * 
   * @example
   * Default data analysis policy
   */
  name?: string;
  /**
   * @remarks
   * The name of the schema template.
   * 
   * This parameter is required.
   * 
   * @example
   * DataQuerySecurityStrategySchema
   */
  schemaName?: string;
  /**
   * @remarks
   * The list of associated workspace IDs.
   */
  workspacesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      contentShrink: 'Content',
      controlDwScope: 'ControlDwScope',
      controlModule: 'ControlModule',
      controlSubModule: 'ControlSubModule',
      description: 'Description',
      name: 'Name',
      schemaName: 'SchemaName',
      workspacesShrink: 'Workspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      contentShrink: 'string',
      controlDwScope: 'string',
      controlModule: 'string',
      controlSubModule: 'string',
      description: 'string',
      name: 'string',
      schemaName: 'string',
      workspacesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

