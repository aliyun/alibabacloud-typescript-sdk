// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateModelRequestContentRequestHeader } from "./CreateModelRequestContentRequestHeader";
import { CreateModelRequestContentRequestParameters } from "./CreateModelRequestContentRequestParameters";
import { CreateModelRequestContentRequestUrlParams } from "./CreateModelRequestContentRequestUrlParams";


export class CreateModelRequestContentRequest extends $dara.Model {
  header?: CreateModelRequestContentRequestHeader;
  parameters?: CreateModelRequestContentRequestParameters;
  /**
   * @example
   * {\\"input\\": [\\"%{input}\\"], \\"input_type\\": \\"%{input_type}\\"}
   */
  requestBody?: string;
  urlParams?: CreateModelRequestContentRequestUrlParams;
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
      header: CreateModelRequestContentRequestHeader,
      parameters: CreateModelRequestContentRequestParameters,
      requestBody: 'string',
      urlParams: CreateModelRequestContentRequestUrlParams,
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

