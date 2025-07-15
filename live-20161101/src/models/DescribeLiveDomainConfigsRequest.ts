// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The ingest domain or streaming domain.
   * 
   * This parameter is required.
   * 
   * @example
   * demo.aliyundoc.com
   */
  domainName?: string;
  /**
   * @remarks
   * The names of the features. Separate multiple features with commas (,). For more information, see the **Features specified by the Functions parameter** section in this topic.
   * 
   * This parameter is required.
   * 
   * @example
   * set_req_host_header,set_hashkey_args
   */
  functionNames?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      functionNames: 'FunctionNames',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      functionNames: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

