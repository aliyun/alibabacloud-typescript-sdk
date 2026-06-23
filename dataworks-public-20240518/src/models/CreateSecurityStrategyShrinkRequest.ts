// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecurityStrategyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated token that ensures request idempotency, preventing duplicate operations if you retry the request.
   * 
   * @example
   * ABFUOEUOTRTRJKE
   */
  clientToken?: string;
  /**
   * @remarks
   * The content of the strategy. This value is constrained by the `SecurityStrategySchema`.
   * 
   * This parameter is required.
   */
  contentShrink?: string;
  /**
   * @remarks
   * **The control scope. Valid values: Workspace and Tenant.**
   * 
   * This parameter is required.
   * 
   * @example
   * Tenant
   */
  controlDwScope?: string;
  /**
   * @remarks
   * **Control module**
   * 
   * This parameter is required.
   * 
   * @example
   * DataQuery
   */
  controlModule?: string;
  /**
   * @remarks
   * **Control submodule**
   * 
   * @example
   * MyCatalog
   */
  controlSubModule?: string;
  /**
   * @remarks
   * **Strategy description**
   * 
   * @example
   * 控制数据分析模块的查询结果安全行为
   */
  description?: string;
  /**
   * @remarks
   * **Strategy name**
   * 
   * This parameter is required.
   * 
   * @example
   * 默认数据分析策略
   */
  name?: string;
  /**
   * @remarks
   * **Schema template name**
   * 
   * This parameter is required.
   * 
   * @example
   * DataQuerySecurityStrategySchema
   */
  schemaName?: string;
  /**
   * @remarks
   * A list of associated workspace IDs.
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

