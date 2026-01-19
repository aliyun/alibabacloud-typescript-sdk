// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOrganizationalUnitsForResourceServerResponseBodyOrganizationalUnitsResourceServerScopes extends $dara.Model {
  /**
   * @remarks
   * ResourceServerScope唯一标识
   * 
   * @example
   * ress_nbte4bb3qqqnaq73rlmkqixxxx
   */
  resourceServerScopeId?: string;
  /**
   * @remarks
   * ResourceServerScope名称
   * 
   * @example
   * 获取资源信息
   */
  resourceServerScopeName?: string;
  static names(): { [key: string]: string } {
    return {
      resourceServerScopeId: 'ResourceServerScopeId',
      resourceServerScopeName: 'ResourceServerScopeName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceServerScopeId: 'string',
      resourceServerScopeName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitsForResourceServerResponseBodyOrganizationalUnits extends $dara.Model {
  /**
   * @remarks
   * 实例唯一标识
   * 
   * @example
   * idaas_qsw77zl5vrllwzyrrfwbmpxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * 组织的唯一标识
   * 
   * @example
   * ou_nbsomva32b6utec3hgi7scxxxx
   */
  organizationalUnitId?: string;
  /**
   * @remarks
   * 资源服务Scope权限集合
   */
  resourceServerScopes?: ListOrganizationalUnitsForResourceServerResponseBodyOrganizationalUnitsResourceServerScopes[];
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      organizationalUnitId: 'OrganizationalUnitId',
      resourceServerScopes: 'ResourceServerScopes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      organizationalUnitId: 'string',
      resourceServerScopes: { 'type': 'array', 'itemType': ListOrganizationalUnitsForResourceServerResponseBodyOrganizationalUnitsResourceServerScopes },
    };
  }

  validate() {
    if(Array.isArray(this.resourceServerScopes)) {
      $dara.Model.validateArray(this.resourceServerScopes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOrganizationalUnitsForResourceServerResponseBody extends $dara.Model {
  /**
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
  organizationalUnits?: ListOrganizationalUnitsForResourceServerResponseBodyOrganizationalUnits[];
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
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      organizationalUnits: 'OrganizationalUnits',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      organizationalUnits: { 'type': 'array', 'itemType': ListOrganizationalUnitsForResourceServerResponseBodyOrganizationalUnits },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.organizationalUnits)) {
      $dara.Model.validateArray(this.organizationalUnits);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

