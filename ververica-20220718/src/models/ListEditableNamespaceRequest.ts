// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEditableNamespaceRequest extends $dara.Model {
  namespace?: string;
  pageIndex?: string;
  pageSize?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  regionId?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      namespace: 'namespace',
      pageIndex: 'pageIndex',
      pageSize: 'pageSize',
      regionId: 'regionId',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      namespace: 'string',
      pageIndex: 'string',
      pageSize: 'string',
      regionId: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

