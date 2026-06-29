// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataServicePublishedApisShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Search conditions.
   */
  listQueryShrink?: string;
  /**
   * @remarks
   * Tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * Data service project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 102102
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      listQueryShrink: 'ListQuery',
      opTenantId: 'OpTenantId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listQueryShrink: 'string',
      opTenantId: 'number',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

