// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecurityStrategyShrinkRequest extends $dara.Model {
  /**
   * @example
   * ABFUOEUOTRTRJKE
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  contentShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Tenant
   */
  controlDwScope?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DataQuery
   */
  controlModule?: string;
  /**
   * @example
   * MyCatalog
   */
  controlSubModule?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DataQuerySecurityStrategySchema
   */
  schemaName?: string;
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

