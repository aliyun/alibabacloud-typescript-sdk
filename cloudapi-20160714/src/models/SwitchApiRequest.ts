// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SwitchApiRequest extends $dara.Model {
  /**
   * @remarks
   * The API ID.
   * 
   * This parameter is required.
   * 
   * @example
   * d6f679aeb3be4b91b3688e887ca1fe16
   */
  apiId?: string;
  /**
   * @remarks
   * The description. The description can be up to 200 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * for_demo
   */
  description?: string;
  /**
   * @remarks
   * The API group ID.
   * 
   * @example
   * 123
   */
  groupId?: string;
  /**
   * @remarks
   * The historical version number of the API.
   * 
   * This parameter is required.
   * 
   * @example
   * 20160705104552292
   */
  historyVersion?: string;
  securityToken?: string;
  /**
   * @remarks
   * The environment. Valid values:
   * 
   * *   **RELEASE**: the production environment
   * *   **PRE**: the staging environment
   * *   **TEST**: the test environment
   * 
   * This parameter is required.
   * 
   * @example
   * RELEASE
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      description: 'Description',
      groupId: 'GroupId',
      historyVersion: 'HistoryVersion',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      description: 'string',
      groupId: 'string',
      historyVersion: 'string',
      securityToken: 'string',
      stageName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

