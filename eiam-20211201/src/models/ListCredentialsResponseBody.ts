// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCredentialsResponseBodyCredentialsCredentialContentOAuthClientContent extends $dara.Model {
  /**
   * @remarks
   * OAuth协议的client_id
   * 
   * @example
   * dmvncmxersdxxxxxx
   */
  clientId?: string;
  static names(): { [key: string]: string } {
    return {
      clientId: 'ClientId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCredentialsResponseBodyCredentialsCredentialContent extends $dara.Model {
  /**
   * @remarks
   * OAuth客户端认证凭证类型的凭据内容。
   */
  OAuthClientContent?: ListCredentialsResponseBodyCredentialsCredentialContentOAuthClientContent;
  static names(): { [key: string]: string } {
    return {
      OAuthClientContent: 'OAuthClientContent',
    };
  }

  static types(): { [key: string]: any } {
    return {
      OAuthClientContent: ListCredentialsResponseBodyCredentialsCredentialContentOAuthClientContent,
    };
  }

  validate() {
    if(this.OAuthClientContent && typeof (this.OAuthClientContent as any).validate === 'function') {
      (this.OAuthClientContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCredentialsResponseBodyCredentials extends $dara.Model {
  /**
   * @remarks
   * 云角色创建时间
   * 
   * @example
   * 1649830225000
   */
  createTime?: number;
  /**
   * @remarks
   * 凭据的内容。
   */
  credentialContent?: ListCredentialsResponseBodyCredentialsCredentialContent;
  /**
   * @remarks
   * 凭据的创建类型。
   * 
   * @example
   * user_custom
   */
  credentialCreationType?: string;
  /**
   * @remarks
   * 凭据ID。
   * 
   * @example
   * cred_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  credentialId?: string;
  /**
   * @remarks
   * 凭据标识
   * 
   * @example
   * credential_identifier_test
   */
  credentialIdentifier?: string;
  /**
   * @remarks
   * 凭据名称
   * 
   * @example
   * credential_name
   */
  credentialName?: string;
  /**
   * @remarks
   * 凭据的使用场景标签。
   * 
   * @example
   * llm
   */
  credentialScenarioLabel?: string;
  /**
   * @remarks
   * 凭据所属的主体ID。
   * 
   * @example
   * apt_werthgfdsasffxxxxx
   */
  credentialSubjectId?: string;
  /**
   * @remarks
   * 凭据所属的主体类型。
   * 
   * @example
   * authentication_token_provider
   */
  credentialSubjectType?: string;
  /**
   * @remarks
   * 凭据类型。
   * 
   * @example
   * api_key
   */
  credentialType?: string;
  /**
   * @remarks
   * 描述
   * 
   * @example
   * credential_description
   */
  description?: string;
  /**
   * @remarks
   * EIAM实例ID。
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 凭据状态
   * 
   * @example
   * enabled
   */
  status?: string;
  /**
   * @remarks
   * 云角色更新时间
   * 
   * @example
   * 1649830227000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      credentialContent: 'CredentialContent',
      credentialCreationType: 'CredentialCreationType',
      credentialId: 'CredentialId',
      credentialIdentifier: 'CredentialIdentifier',
      credentialName: 'CredentialName',
      credentialScenarioLabel: 'CredentialScenarioLabel',
      credentialSubjectId: 'CredentialSubjectId',
      credentialSubjectType: 'CredentialSubjectType',
      credentialType: 'CredentialType',
      description: 'Description',
      instanceId: 'InstanceId',
      status: 'Status',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'number',
      credentialContent: ListCredentialsResponseBodyCredentialsCredentialContent,
      credentialCreationType: 'string',
      credentialId: 'string',
      credentialIdentifier: 'string',
      credentialName: 'string',
      credentialScenarioLabel: 'string',
      credentialSubjectId: 'string',
      credentialSubjectType: 'string',
      credentialType: 'string',
      description: 'string',
      instanceId: 'string',
      status: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    if(this.credentialContent && typeof (this.credentialContent as any).validate === 'function') {
      (this.credentialContent as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCredentialsResponseBody extends $dara.Model {
  credentials?: ListCredentialsResponseBodyCredentials[];
  /**
   * @remarks
   * 分页查询时每页行数。
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * 本次调用返回的查询凭证（Token）值，用于下一次翻页查询。
   * 
   * @example
   * NTxxxexample
   */
  nextToken?: string;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      credentials: 'Credentials',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentials: { 'type': 'array', 'itemType': ListCredentialsResponseBodyCredentials },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.credentials)) {
      $dara.Model.validateArray(this.credentials);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

