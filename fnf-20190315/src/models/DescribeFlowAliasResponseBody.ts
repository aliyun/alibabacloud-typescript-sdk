// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFlowAliasResponseBodyAliasRoutingConfigurations extends $dara.Model {
  /**
   * @example
   * 1
   */
  version?: string;
  /**
   * @example
   * 10
   */
  weight?: number;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      weight: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowAliasResponseBodyAlias extends $dara.Model {
  /**
   * @example
   * 2024-04-22T06:09:39.907Z
   */
  createdTime?: string;
  /**
   * @example
   * alias description
   */
  description?: string;
  /**
   * @example
   * alias-name
   */
  name?: string;
  routingConfigurations?: DescribeFlowAliasResponseBodyAliasRoutingConfigurations[];
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      name: 'Name',
      routingConfigurations: 'RoutingConfigurations',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      name: 'string',
      routingConfigurations: { 'type': 'array', 'itemType': DescribeFlowAliasResponseBodyAliasRoutingConfigurations },
    };
  }

  validate() {
    if(Array.isArray(this.routingConfigurations)) {
      $dara.Model.validateArray(this.routingConfigurations);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeFlowAliasResponseBody extends $dara.Model {
  alias?: DescribeFlowAliasResponseBodyAlias;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 294D68C1-5108-5971-853A-1A9CC87B4816
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      alias: 'Alias',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alias: DescribeFlowAliasResponseBodyAlias,
      requestId: 'string',
    };
  }

  validate() {
    if(this.alias && typeof (this.alias as any).validate === 'function') {
      (this.alias as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

