// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataProcessJobTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to fetch the image summary or video synopsis. When Settings is set to true, CaptioningPrompt must be specified.
   */
  captioning?: boolean;
  /**
   * @remarks
   * The prompt used for extracting summaries. This parameter takes effect only when Captioning is set to true.
   * 
   * @example
   * Summarize the image content
   */
  captioningPrompt?: string;
  /**
   * @remarks
   * Specifies whether to convert the content into vectors.
   */
  embedding?: boolean;
  /**
   * @remarks
   * The output dimension of the vector. Valid values when Embedding is set to true: 512, 768, 1024, and 2048.
   * 
   * @example
   * 1024
   */
  embeddingDimension?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The JSON string for additional template configurations.
   * 
   * This parameter is required.
   * 
   * @example
   * {"ETL_TEMPLATE_STR":"config"}
   */
  templateConfig?: string;
  /**
   * @remarks
   * The name of the task template.
   * 
   * @example
   * template1
   */
  templateName?: string;
  /**
   * @remarks
   * The templatetype of the node. Valid values: image.
   * 
   * This parameter is required.
   * 
   * @example
   * image
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      captioning: 'Captioning',
      captioningPrompt: 'CaptioningPrompt',
      embedding: 'Embedding',
      embeddingDimension: 'EmbeddingDimension',
      regionId: 'RegionId',
      templateConfig: 'TemplateConfig',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captioning: 'boolean',
      captioningPrompt: 'string',
      embedding: 'boolean',
      embeddingDimension: 'number',
      regionId: 'string',
      templateConfig: 'string',
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

