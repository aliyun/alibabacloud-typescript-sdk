// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSecurityStrategyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure request idempotence.
   * 
   * @example
   * 1AFAE64E-D1BE-432B-A9*****
   */
  clientToken?: string;
  /**
   * @remarks
   * The policy content, which is constrained by the `SecurityStrategySchema`.
   * 
   * This parameter is required.
   */
  contentShrink?: string;
  /**
   * @remarks
   * **The policy description.**
   * 
   * @example
   * 控制数据分析模块的查询结果安全行为
   */
  description?: string;
  /**
   * @remarks
   * **The policy ID.**
   * 
   * This parameter is required.
   * 
   * @example
   * 13
   */
  id?: number;
  /**
   * @remarks
   * **The policy name.**
   * 
   * @example
   * 默认数据分析策略
   */
  name?: string;
  /**
   * @remarks
   * **A list of associated workspace IDs.**
   */
  workspacesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      contentShrink: 'Content',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      workspacesShrink: 'Workspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      contentShrink: 'string',
      description: 'string',
      id: 'number',
      name: 'string',
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

