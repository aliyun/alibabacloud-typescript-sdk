// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetConnectionResponseBodyDataConnectionsAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters extends $dara.Model {
  /**
   * @remarks
   * Indicates whether authentication is enabled.
   * 
   * @example
   * false
   */
  isValueSecret?: string;
  /**
   * @remarks
   * The key of the request path.
   * 
   * @example
   * keyDemo
   */
  key?: string;
  /**
   * @remarks
   * The value of the request path.
   * 
   * @example
   * valueDemo
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      isValueSecret: 'IsValueSecret',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isValueSecret: 'string',
      key: 'string',
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

