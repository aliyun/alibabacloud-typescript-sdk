// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeploySGLangModelInputModelConfigFmkSGLangConfig extends $dara.Model {
  apiKey?: string;
  chatTemplate?: string;
  dtype?: string;
  fullTextPostfix?: string;
  loadFormat?: string;
  maxRunningRequests?: number;
  maxTotalTokens?: number;
  memFractionStatic?: number;
  quantization?: string;
  servedModelName?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'apiKey',
      chatTemplate: 'chatTemplate',
      dtype: 'dtype',
      fullTextPostfix: 'fullTextPostfix',
      loadFormat: 'loadFormat',
      maxRunningRequests: 'maxRunningRequests',
      maxTotalTokens: 'maxTotalTokens',
      memFractionStatic: 'memFractionStatic',
      quantization: 'quantization',
      servedModelName: 'servedModelName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      chatTemplate: 'string',
      dtype: 'string',
      fullTextPostfix: 'string',
      loadFormat: 'string',
      maxRunningRequests: 'number',
      maxTotalTokens: 'number',
      memFractionStatic: 'number',
      quantization: 'string',
      servedModelName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

