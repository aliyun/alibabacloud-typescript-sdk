// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCredentialsRequestFilter extends $dara.Model {
  /**
   * @example
   * CredentialIdentifier
   */
  name?: string;
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCredentialsRequest extends $dara.Model {
  credentialIds?: string[];
  credentialTypes?: string[];
  filter?: ListCredentialsRequestFilter[];
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
  statuses?: string[];
  static names(): { [key: string]: string } {
    return {
      credentialIds: 'CredentialIds',
      credentialTypes: 'CredentialTypes',
      filter: 'Filter',
      instanceId: 'InstanceId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      statuses: 'Statuses',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialIds: { 'type': 'array', 'itemType': 'string' },
      credentialTypes: { 'type': 'array', 'itemType': 'string' },
      filter: { 'type': 'array', 'itemType': ListCredentialsRequestFilter },
      instanceId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      statuses: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.credentialIds)) {
      $dara.Model.validateArray(this.credentialIds);
    }
    if(Array.isArray(this.credentialTypes)) {
      $dara.Model.validateArray(this.credentialTypes);
    }
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    if(Array.isArray(this.statuses)) {
      $dara.Model.validateArray(this.statuses);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

