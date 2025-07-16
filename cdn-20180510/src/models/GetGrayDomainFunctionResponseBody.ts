// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGrayDomainFunctionResponseBodyDomainConfigListFunctionArgs extends $dara.Model {
  /**
   * @example
   * auth_type
   */
  argName?: string;
  /**
   * @example
   * req
   */
  argValue?: string;
  static names(): { [key: string]: string } {
    return {
      argName: 'ArgName',
      argValue: 'ArgValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argName: 'string',
      argValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class GetGrayDomainFunctionResponseBody extends $dara.Model {
  domainConfigList?: GetGrayDomainFunctionResponseBodyDomainConfigList[];
  /**
   * @example
   * example.com
   */
  domainName?: string;
  progression?: string;
  /**
   * @example
   * C80705BF-0F76-41FA-BAD1-5B59296A4E59
   */
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      domainConfigList: 'DomainConfigList',
      domainName: 'DomainName',
      progression: 'Progression',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfigList: { 'type': 'array', 'itemType': GetGrayDomainFunctionResponseBodyDomainConfigList },
      domainName: 'string',
      progression: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainConfigList)) {
      $dara.Model.validateArray(this.domainConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

