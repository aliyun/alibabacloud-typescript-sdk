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
   * Controls the security behavior of query results in the Data Analysis module
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
   * Default data analysis policy
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

