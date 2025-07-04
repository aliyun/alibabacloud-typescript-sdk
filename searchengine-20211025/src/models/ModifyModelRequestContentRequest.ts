// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyModelRequestContentRequestHeader } from "./ModifyModelRequestContentRequestHeader";
import { ModifyModelRequestContentRequestParameters } from "./ModifyModelRequestContentRequestParameters";
import { ModifyModelRequestContentRequestUrlParams } from "./ModifyModelRequestContentRequestUrlParams";


export class ModifyModelRequestContentRequest extends $dara.Model {
  header?: ModifyModelRequestContentRequestHeader;
  parameters?: ModifyModelRequestContentRequestParameters;
  /**
   * @example
   * {\\"input\\": [\\"%{input}\\"], \\"input_type\\": \\"%{input_type}\\"}
   */
  requestBody?: string;
  urlParams?: ModifyModelRequestContentRequestUrlParams;
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
      header: ModifyModelRequestContentRequestHeader,
      parameters: ModifyModelRequestContentRequestParameters,
      requestBody: 'string',
      urlParams: ModifyModelRequestContentRequestUrlParams,
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

