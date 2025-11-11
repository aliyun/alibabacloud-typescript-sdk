// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserAuthnSourceMappingsRequest extends $dara.Model {
  /**
   * @remarks
   * 来源Idp Id
   * 
   * @example
   * idp_11111
   */
  identityProviderId?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 分页查询时每页行数。默认值为20，最大值为100。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * 查询凭证（Token），取值为上一次API调用返回的NextToken参数值。
   * 
   * @example
   * NTxxxxxexample
   */
  nextToken?: string;
  /**
   * @remarks
   * 查询上一页凭证（Token），取值为上一次API调用返回的previousToken参数值。
   * 
   * @example
   * PTxxxxxexample
   */
  previousToken?: string;
  /**
   * @remarks
   * 外部关联ID
   * 
   * @example
   * xxxxxx
   */
  userExternalId?: string;
  /**
   * @remarks
   * 用户ID
   * 
   * This parameter is required.
   * 
   * @example
   * user_ue2jvisn35exxxxx
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      identityProviderId: 'IdentityProviderId',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      previousToken: 'PreviousToken',
      userExternalId: 'UserExternalId',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identityProviderId: 'string',
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      previousToken: 'string',
      userExternalId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

