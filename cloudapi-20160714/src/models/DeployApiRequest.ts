// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployApiRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * This parameter is required.
   * 
   * @example
   * d6f679aeb3be4b91b3688e887ca1fe16
   */
  apiId?: string;
  /**
   * @remarks
   * The publishing remarks.
   * 
   * This parameter is required.
   * 
   * @example
   * for_test1
   */
  description?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * 63be9002440b4778a61122f14c2b2bbb
   */
  groupId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The name of the runtime environment. Valid values:
   * 
   * *   **RELEASE**
   * *   **PRE**: the pre-release environment
   * *   **TEST**
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
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      description: 'string',
      groupId: 'string',
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

