// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCredentialsRequest extends $dara.Model {
  /**
   * @remarks
   * credentialAuthType
   * 
   * @example
   * credentialAuthType
   */
  credentialAuthType?: string;
  /**
   * @remarks
   * credentialName
   * 
   * @example
   * credentialName
   */
  credentialName?: string;
  /**
   * @remarks
   * credentialSourceType
   * 
   * @example
   * credentialSourceType
   */
  credentialSourceType?: string;
  /**
   * @example
   * False
   */
  enabled?: boolean;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 0
   */
  pageSize?: number;
  /**
   * @example
   * Aliyun
   */
  provider?: string;
  workspaceId?: string;
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

