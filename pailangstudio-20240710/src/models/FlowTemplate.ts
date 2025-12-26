// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlowTemplate extends $dara.Model {
  accessibility?: string;
  aliyunDocumentId?: string;
  description?: string;
  descriptionI18N?: { [key: string]: string };
  displayName?: string;
  displayNameI18N?: { [key: string]: string };
  flowFiles?: string;
  flowStoragePath?: string;
  flowTemplateId?: string;
  flowType?: string;
  locale?: string;
  referenceCount?: number;
  templateGroup?: string;
  templateName?: string;
  url?: string;
  version?: string;
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      aliyunDocumentId: 'AliyunDocumentId',
      description: 'Description',
      descriptionI18N: 'DescriptionI18N',
      displayName: 'DisplayName',
      displayNameI18N: 'DisplayNameI18N',
      flowFiles: 'FlowFiles',
      flowStoragePath: 'FlowStoragePath',
      flowTemplateId: 'FlowTemplateId',
      flowType: 'FlowType',
      locale: 'Locale',
      referenceCount: 'ReferenceCount',
      templateGroup: 'TemplateGroup',
      templateName: 'TemplateName',
      url: 'Url',
      version: 'Version',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      aliyunDocumentId: 'string',
      description: 'string',
      descriptionI18N: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      displayName: 'string',
      displayNameI18N: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      flowFiles: 'string',
      flowStoragePath: 'string',
      flowTemplateId: 'string',
      flowType: 'string',
      locale: 'string',
      referenceCount: 'number',
      templateGroup: 'string',
      templateName: 'string',
      url: 'string',
      version: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.descriptionI18N) {
      $dara.Model.validateMap(this.descriptionI18N);
    }
    if(this.displayNameI18N) {
      $dara.Model.validateMap(this.displayNameI18N);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

