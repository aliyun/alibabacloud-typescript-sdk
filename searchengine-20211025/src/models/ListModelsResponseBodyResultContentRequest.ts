// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListModelsResponseBodyResultContentRequestHeader } from "./ListModelsResponseBodyResultContentRequestHeader";
import { ListModelsResponseBodyResultContentRequestParameters } from "./ListModelsResponseBodyResultContentRequestParameters";
import { ListModelsResponseBodyResultContentRequestUrlParams } from "./ListModelsResponseBodyResultContentRequestUrlParams";


export class ListModelsResponseBodyResultContentRequest extends $dara.Model {
  header?: ListModelsResponseBodyResultContentRequestHeader;
  parameters?: ListModelsResponseBodyResultContentRequestParameters;
  /**
   * @example
   * {\\"input\\": [\\"%{input}\\"], \\"input_type\\": \\"%{input_type}\\"}
   */
  requestBody?: string;
  urlParams?: ListModelsResponseBodyResultContentRequestUrlParams;
  static names(): { [key: string]: string } {
    return {
      header: 'header',
      parameters: 'parameters',
      requestBody: 'requestBody',
      urlParams: 'urlParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      header: ListModelsResponseBodyResultContentRequestHeader,
      parameters: ListModelsResponseBodyResultContentRequestParameters,
      requestBody: 'string',
      urlParams: ListModelsResponseBodyResultContentRequestUrlParams,
    };
  }

  validate() {
    if(this.header && typeof (this.header as any).validate === 'function') {
      (this.header as any).validate();
    }
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    if(this.urlParams && typeof (this.urlParams as any).validate === 'function') {
      (this.urlParams as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

