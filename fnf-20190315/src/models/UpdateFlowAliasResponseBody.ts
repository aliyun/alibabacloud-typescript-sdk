// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFlowAliasResponseBodyAliasRoutingConfigurations extends $dara.Model {
  /**
   * @example
   * 1
   */
  version?: string;
  /**
   * @example
   * 20
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

export class UpdateFlowAliasResponseBodyAlias extends $dara.Model {
  /**
   * @example
   * 2025-10-24T14:11:26+08:00
   */
  createdTime?: string;
  /**
   * @example
   * my alias description
   */
  description?: string;
  /**
   * @example
   * my-alias-name
   */
  name?: string;
  routingConfigurations?: UpdateFlowAliasResponseBodyAliasRoutingConfigurations[];
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
      routingConfigurations: { 'type': 'array', 'itemType': UpdateFlowAliasResponseBodyAliasRoutingConfigurations },
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

export class UpdateFlowAliasResponseBody extends $dara.Model {
  alias?: UpdateFlowAliasResponseBodyAlias;
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
      alias: UpdateFlowAliasResponseBodyAlias,
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

