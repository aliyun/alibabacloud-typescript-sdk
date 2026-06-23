// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMdsCubeResourcesRequest extends $dara.Model {
  appId?: string;
  pageNum?: number;
  pageSize?: number;
  templateId?: string;
  tenantId?: string;
  workspaceId?: string;
  test?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      templateId: 'TemplateId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
      test: 'test',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      templateId: 'string',
      tenantId: 'string',
      workspaceId: 'string',
      test: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

