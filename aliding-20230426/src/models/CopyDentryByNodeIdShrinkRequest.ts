// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CopyDentryByNodeIdShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  dentryUuid?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  tenantContextShrink?: string;
  toNextNodeId?: string;
  toParentNodeId?: string;
  toPrevNodeId?: string;
  static names(): { [key: string]: string } {
    return {
      dentryUuid: 'DentryUuid',
      name: 'Name',
      tenantContextShrink: 'TenantContext',
      toNextNodeId: 'ToNextNodeId',
      toParentNodeId: 'ToParentNodeId',
      toPrevNodeId: 'ToPrevNodeId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryUuid: 'string',
      name: 'string',
      tenantContextShrink: 'string',
      toNextNodeId: 'string',
      toParentNodeId: 'string',
      toPrevNodeId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

