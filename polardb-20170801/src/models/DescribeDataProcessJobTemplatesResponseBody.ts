// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDataProcessJobTemplatesResponseBodyItems extends $dara.Model {
  /**
   * @remarks
   * Specifies whether it is required to fetch the summary or video synopsis.
   * 
   * @example
   * true
   */
  captioning?: boolean;
  /**
   * @remarks
   * The prompt used when extracting captions.
   * 
   * @example
   * Summarize the image content
   */
  captioningPrompt?: string;
  /**
   * @remarks
   * The time when the task template was created, in RFC 3339 format.
   * 
   * @example
   * 2025-01-01T00:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * Specifies whether to convert content into vectors.
   * 
   * @example
   * true
   */
  embedding?: boolean;
  /**
   * @remarks
   * The output dimension of the vector.
   * 
   * @example
   * 768
   */
  embeddingDimension?: number;
  /**
   * @remarks
   * The task template status.
   * 
   * @example
   * Active
   */
  status?: string;
  /**
   * @remarks
   * The JSON configuration string of the template.
   * 
   * @example
   * {"ETL_TEMPLATE_STR":"config"}
   */
  templateConfig?: string;
  /**
   * @remarks
   * The task template ID.
   * 
   * @example
   * tpl-123456
   */
  templateId?: string;
  /**
   * @remarks
   * The task template name.
   * 
   * @example
   * template1
   */
  templateName?: string;
  /**
   * @remarks
   * The node templatetype. Valid value: image.
   * 
   * @example
   * image
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      captioning: 'Captioning',
      captioningPrompt: 'CaptioningPrompt',
      creationTime: 'CreationTime',
      embedding: 'Embedding',
      embeddingDimension: 'EmbeddingDimension',
      status: 'Status',
      templateConfig: 'TemplateConfig',
      templateId: 'TemplateId',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captioning: 'boolean',
      captioningPrompt: 'string',
      creationTime: 'string',
      embedding: 'boolean',
      embeddingDimension: 'number',
      status: 'string',
      templateConfig: 'string',
      templateId: 'string',
      templateName: 'string',
      templateType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeDataProcessJobTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of data processing task templates.
   */
  items?: DescribeDataProcessJobTemplatesResponseBodyItems[];
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of templates returned on the current page.
   * 
   * @example
   * 1
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2921D843-433A-5FB3-A03B-4EC093B219F8
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of templates that meet the specified conditions.
   * 
   * @example
   * 1
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      items: 'Items',
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      requestId: 'RequestId',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      items: { 'type': 'array', 'itemType': DescribeDataProcessJobTemplatesResponseBodyItems },
      pageNumber: 'number',
      pageRecordCount: 'number',
      requestId: 'string',
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

