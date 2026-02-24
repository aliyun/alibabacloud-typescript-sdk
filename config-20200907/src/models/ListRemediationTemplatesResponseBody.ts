// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRemediationTemplatesResponseBodyRemediationTemplates extends $dara.Model {
  remediationType?: string;
  templateDefinition?: string;
  templateDescription?: string;
  templateIdentifier?: string;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      remediationType: 'RemediationType',
      templateDefinition: 'TemplateDefinition',
      templateDescription: 'TemplateDescription',
      templateIdentifier: 'TemplateIdentifier',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediationType: 'string',
      templateDefinition: 'string',
      templateDescription: 'string',
      templateIdentifier: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListRemediationTemplatesResponseBody extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  remediationTemplates?: ListRemediationTemplatesResponseBodyRemediationTemplates[];
  requestId?: string;
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      remediationTemplates: 'RemediationTemplates',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      remediationTemplates: { 'type': 'array', 'itemType': ListRemediationTemplatesResponseBodyRemediationTemplates },
      requestId: 'string',
      totalCount: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.remediationTemplates)) {
      $dara.Model.validateArray(this.remediationTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

