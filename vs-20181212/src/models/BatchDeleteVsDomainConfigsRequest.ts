// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteVsDomainConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.aliyundoc.com
   */
  domainNames?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https_force
   */
  functionNames?: string;
  ownerId?: number;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      functionNames: 'FunctionNames',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      functionNames: 'string',
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

