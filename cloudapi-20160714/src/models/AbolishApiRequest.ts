// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AbolishApiRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the specified API.
   * 
   * This parameter is required.
   * 
   * @example
   * d6f679aeb3be4b91b3688e887ca1fe16
   */
  apiId?: string;
  /**
   * @remarks
   * The ID of the API group.
   * 
   * @example
   * 123
   */
  groupId?: string;
  securityToken?: string;
  /**
   * @remarks
   * The name of the runtime environment. Valid values:
   * 
   * *   **RELEASE**
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
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
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

