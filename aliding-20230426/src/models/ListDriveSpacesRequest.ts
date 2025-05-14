// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDriveSpacesRequestTenantContext } from "./ListDriveSpacesRequestTenantContext";


export class ListDriveSpacesRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  maxResults?: number;
  /**
   * @example
   * fekaf
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * org
   */
  spaceType?: string;
  tenantContext?: ListDriveSpacesRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      spaceType: 'SpaceType',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      spaceType: 'string',
      tenantContext: ListDriveSpacesRequestTenantContext,
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

