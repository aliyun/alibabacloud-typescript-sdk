// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetGrayDomainFunctionResponseBodyDomainConfigListFunctionArgs } from "./GetGrayDomainFunctionResponseBodyDomainConfigListFunctionArgs";


export class GetGrayDomainFunctionResponseBodyDomainConfigList extends $dara.Model {
  /**
   * @example
   * 6295
   */
  configId?: number;
  functionArgs?: GetGrayDomainFunctionResponseBodyDomainConfigListFunctionArgs[];
  /**
   * @example
   * ali_auth
   */
  functionName?: string;
  /**
   * @example
   * 222728944812032
   */
  parentId?: string;
  /**
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      functionArgs: 'FunctionArgs',
      functionName: 'FunctionName',
      parentId: 'ParentId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      functionArgs: { 'type': 'array', 'itemType': GetGrayDomainFunctionResponseBodyDomainConfigListFunctionArgs },
      functionName: 'string',
      parentId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.functionArgs)) {
      $dara.Model.validateArray(this.functionArgs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

