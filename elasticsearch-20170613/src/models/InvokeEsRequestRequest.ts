// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InvokeEsRequestRequest extends $dara.Model {
  /**
   * @remarks
   * The request body passed through to ES. Set this parameter based on the requirements of the target ES API. This parameter is not required for calls such as GET that do not have a request body.
   * 
   * @example
   * {"query":{"match_all":{}}}
   */
  body?: string;
  /**
   * @remarks
   * The ID of the credential to use. If this parameter is not specified, the default credential of the instance is used.
   * 
   * @example
   * cred-7k2mq9xr4vbn
   */
  credentialId?: string;
  /**
   * @remarks
   * The HTTP method used to access ES. Default value: GET.
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The ES path to access. This parameter is required. The leading / can be omitted.
   * 
   * This parameter is required.
   * 
   * @example
   * _cat/indices?format=json
   */
  path?: string;
  /**
   * @remarks
   * Specifies whether to use the Alibaba Cloud ES system credential. Default value: false.
   * 
   * @example
   * false
   */
  system?: boolean;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
      credentialId: 'credentialId',
      method: 'method',
      path: 'path',
      system: 'system',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      credentialId: 'string',
      method: 'string',
      path: 'string',
      system: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

