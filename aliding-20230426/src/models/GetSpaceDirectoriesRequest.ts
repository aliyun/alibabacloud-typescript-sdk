// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSpaceDirectoriesRequestTenantContext } from "./GetSpaceDirectoriesRequestTenantContext";


export class GetSpaceDirectoriesRequest extends $dara.Model {
  /**
   * @example
   * asdasd
   */
  dentryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @example
   * 123123
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * qweqwe
   */
  spaceId?: string;
  tenantContext?: GetSpaceDirectoriesRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      dentryId: 'DentryId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      spaceId: 'SpaceId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryId: 'string',
      maxResults: 'number',
      nextToken: 'string',
      spaceId: 'string',
      tenantContext: GetSpaceDirectoriesRequestTenantContext,
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

