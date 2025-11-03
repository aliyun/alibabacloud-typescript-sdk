// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EmbeddingTransformParametersEmbeddingData extends $dara.Model {
  form?: string;
  template?: string;
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
  apiKey?: string;
  embeddingData?: EmbeddingTransformParametersEmbeddingData;
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

