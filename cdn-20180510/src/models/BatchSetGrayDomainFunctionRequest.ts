// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSetGrayDomainFunctionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * [{"functionArgs": [{"argName": "key","argValue": "Content-Encoding"},{"argName": "value","argValue": "gzip"}],"functionName": "set_resp_header"} ]
   */
  configs?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com,xxx.org.com
   */
  domainNames?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      domainNames: 'DomainNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: 'string',
      domainNames: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

