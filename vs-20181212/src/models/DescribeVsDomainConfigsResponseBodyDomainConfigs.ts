// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeVsDomainConfigsResponseBodyDomainConfigsFunctionArgs } from "./DescribeVsDomainConfigsResponseBodyDomainConfigsFunctionArgs";


export class DescribeVsDomainConfigsResponseBodyDomainConfigs extends $dara.Model {
  /**
   * @example
   * 6295
   */
  configId?: string;
  functionArgs?: DescribeVsDomainConfigsResponseBodyDomainConfigsFunctionArgs[];
  /**
   * @example
   * aliauth
   */
  functionName?: string;
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
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      functionArgs: { 'type': 'array', 'itemType': DescribeVsDomainConfigsResponseBodyDomainConfigsFunctionArgs },
      functionName: 'string',
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

