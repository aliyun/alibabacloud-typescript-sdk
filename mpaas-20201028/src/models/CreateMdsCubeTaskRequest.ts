// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMdsCubeTaskRequest extends $dara.Model {
  appId?: string;
  greyConfigInfo?: string;
  greyEndtimeData?: string;
  greyNum?: number;
  publishMode?: number;
  publishType?: number;
  taskDesc?: string;
  templateResourceId?: number;
  tenantId?: string;
  whitelistIds?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      greyConfigInfo: 'GreyConfigInfo',
      greyEndtimeData: 'GreyEndtimeData',
      greyNum: 'GreyNum',
      publishMode: 'PublishMode',
      publishType: 'PublishType',
      taskDesc: 'TaskDesc',
      templateResourceId: 'TemplateResourceId',
      tenantId: 'TenantId',
      whitelistIds: 'WhitelistIds',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      greyConfigInfo: 'string',
      greyEndtimeData: 'string',
      greyNum: 'number',
      publishMode: 'number',
      publishType: 'number',
      taskDesc: 'string',
      templateResourceId: 'number',
      tenantId: 'string',
      whitelistIds: 'string',
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

