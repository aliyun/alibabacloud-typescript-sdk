// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveApisAuthoritiesRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the APIs. Separate multiple API IDs with commas (,). A maximum of 100 API IDs can be entered.
   * 
   * This parameter is required.
   * 
   * @example
   * baacc592e63a4cb6a41920d9d3f91f38,jkscc489e63a4cb6a41920d9d3f92d78
   */
  apiIds?: string;
  /**
   * @remarks
   * The ID of the appplication. The ID is generated by the system and globally unique.
   * 
   * This parameter is required.
   * 
   * @example
   * 2386789
   */
  appId?: number;
  /**
   * @remarks
   * The description of the authorization.
   * 
   * @example
   * Queries weather based on the region name
   */
  description?: string;
  /**
   * @remarks
   * The ID of the API group. This ID is generated by the system and globally unique.
   * 
   * @example
   * 523e8dc7bbe04613b5b1d726c2a7889d
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
   * TEST
   */
  stageName?: string;
  static names(): { [key: string]: string } {
    return {
      apiIds: 'ApiIds',
      appId: 'AppId',
      description: 'Description',
      groupId: 'GroupId',
      securityToken: 'SecurityToken',
      stageName: 'StageName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiIds: 'string',
      appId: 'number',
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

