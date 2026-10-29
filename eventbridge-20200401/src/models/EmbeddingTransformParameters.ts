// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EmbeddingTransformParametersEmbeddingData extends $dara.Model {
  /**
   * @remarks
   * The method used to generate the input data. JSONPATH indicates that data is extracted from the event by using JSONPath.
   * 
   * @example
   * JSONPATH
   */
  form?: string;
  /**
   * @remarks
   * The template used to build the input data. This parameter is used only when Form is set to TEMPLATE.
   * 
   * @example
   * The value of ${key} is ${value}!
   */
  template?: string;
  /**
   * @remarks
   * The source content of the input data. If Form is set to JSONPATH, specify a JSONPath expression.
   * 
   * @example
   * $.data.message
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      form: 'Form',
      template: 'Template',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      form: 'string',
      template: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EmbeddingTransformParameters extends $dara.Model {
  /**
   * @remarks
   * The API key used to call the Model Studio embedding model service.
   * 
   * @example
   * Q37sQ****
   */
  apiKey?: string;
  /**
   * @remarks
   * The input data to be vectorized and its transformation method.
   */
  embeddingData?: EmbeddingTransformParametersEmbeddingData;
  /**
   * @remarks
   * The name of the model used to generate embeddings.
   * 
   * @example
   * text-embedding-v3
   */
  embeddingModel?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      embeddingData: 'EmbeddingData',
      embeddingModel: 'EmbeddingModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      embeddingData: EmbeddingTransformParametersEmbeddingData,
      embeddingModel: 'string',
    };
  }

  validate() {
    if(this.embeddingData && typeof (this.embeddingData as any).validate === 'function') {
      (this.embeddingData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

