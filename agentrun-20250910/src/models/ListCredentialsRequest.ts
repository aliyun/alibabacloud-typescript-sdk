// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCredentialsRequest extends $dara.Model {
  /**
   * @remarks
   * Filters the results by credential type.
   * 
   * @example
   * credentialAuthType
   */
  credentialAuthType?: string;
  /**
   * @remarks
   * Filters the results by credential name.
   * 
   * @example
   * credentialName
   */
  credentialName?: string;
  /**
   * @remarks
   * Filters the results by credential source type.
   * 
   * @example
   * credentialSourceType
   */
  credentialSourceType?: string;
  /**
   * @remarks
   * Filters the results based on the credential\\"s enabled status.
   * 
   * @example
   * False
   */
  enabled?: boolean;
  /**
   * @remarks
   * The page number of the results to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of credentials to return per page.
   * 
   * @example
   * 0
   */
  pageSize?: number;
  /**
   * @remarks
   * Filters the results by provider.
   * 
   * @example
   * Aliyun
   */
  provider?: string;
  /**
   * @remarks
   * Unique identifier of the workspace
   * 
   * @example
   * ws-1
   */
  workspaceId?: string;
  /**
   * @remarks
   * Multiple workspace identifiers
   * 
   * @example
   * ws-1,ws-2
   */
  workspaceIds?: string;
  static names(): { [key: string]: string } {
    return {
      credentialAuthType: 'credentialAuthType',
      credentialName: 'credentialName',
      credentialSourceType: 'credentialSourceType',
      enabled: 'enabled',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      provider: 'provider',
      workspaceId: 'workspaceId',
      workspaceIds: 'workspaceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialAuthType: 'string',
      credentialName: 'string',
      credentialSourceType: 'string',
      enabled: 'boolean',
      pageNumber: 'number',
      pageSize: 'number',
      provider: 'string',
      workspaceId: 'string',
      workspaceIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

