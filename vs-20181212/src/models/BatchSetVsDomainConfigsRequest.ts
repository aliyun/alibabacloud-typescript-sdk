// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSetVsDomainConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * Your accelerated domain names.
   * 
   * > Supports multiple domain names separated by commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainNames?: string;
  /**
   * @remarks
   * List of features.
   * 
   * This parameter is required.
   * 
   * @example
   * [{“functionArgs”:[{“argName”:”domain_name”,”argValue”:”api.hellodtworld.com”}],”functionName”:”set_req_host_header”}]
   */
  functions?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      functions: 'Functions',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      functions: 'string',
      ownerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

