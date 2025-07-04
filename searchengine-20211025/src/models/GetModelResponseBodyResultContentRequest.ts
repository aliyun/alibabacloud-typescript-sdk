// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetModelResponseBodyResultContentRequestHeader } from "./GetModelResponseBodyResultContentRequestHeader";
import { GetModelResponseBodyResultContentRequestParameters } from "./GetModelResponseBodyResultContentRequestParameters";
import { GetModelResponseBodyResultContentRequestUrlParams } from "./GetModelResponseBodyResultContentRequestUrlParams";


export class GetModelResponseBodyResultContentRequest extends $dara.Model {
  header?: GetModelResponseBodyResultContentRequestHeader;
  parameters?: GetModelResponseBodyResultContentRequestParameters;
  /**
   * @example
   * {\\"input\\": [\\"%{input}\\"], \\"input_type\\": \\"%{input_type}\\"}
   */
  requestBody?: string;
  urlParams?: GetModelResponseBodyResultContentRequestUrlParams;
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
      header: GetModelResponseBodyResultContentRequestHeader,
      parameters: GetModelResponseBodyResultContentRequestParameters,
      requestBody: 'string',
      urlParams: GetModelResponseBodyResultContentRequestUrlParams,
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

