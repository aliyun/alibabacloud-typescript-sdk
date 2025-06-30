// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteResolverEndpointRequest extends $dara.Model {
  /**
   * @remarks
   * The endpoint ID. This ID uniquely identifies the endpoint.
   * 
   * This parameter is required.
   * 
   * @example
   * hr****
   */
  endpointId?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   zh: Chinese
   * *   en: English
   * 
   * Default value: en.
   * 
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

