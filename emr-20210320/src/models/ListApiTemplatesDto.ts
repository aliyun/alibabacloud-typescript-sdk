// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiTemplatesDTO extends $dara.Model {
  apiName?: string;
  content?: string;
  gmtCreate?: number;
  gmtModified?: number;
  id?: number;
  operatorId?: string;
  regionId?: string;
  resourceGroupId?: string;
  status?: string;
  templateId?: string;
  templateName?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      apiName: 'ApiName',
      content: 'Content',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      operatorId: 'OperatorId',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiName: 'string',
      content: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      operatorId: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      status: 'string',
      templateId: 'string',
      templateName: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

