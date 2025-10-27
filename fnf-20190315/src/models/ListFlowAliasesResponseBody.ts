// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFlowAliasesResponseBodyAliasesRoutingConfigurations extends $dara.Model {
  /**
   * @example
   * 1
   */
  version?: string;
  /**
   * @example
   * 20
   */
  weight?: string;
  static names(): { [key: string]: string } {
    return {
      version: 'Version',
      weight: 'Weight',
    };
  }

  static types(): { [key: string]: any } {
    return {
      version: 'string',
      weight: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFlowAliasesResponseBodyAliases extends $dara.Model {
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
  routingConfigurations?: ListFlowAliasesResponseBodyAliasesRoutingConfigurations[];
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
      routingConfigurations: { 'type': 'array', 'itemType': ListFlowAliasesResponseBodyAliasesRoutingConfigurations },
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

export class ListFlowAliasesResponseBody extends $dara.Model {
  aliases?: ListFlowAliasesResponseBodyAliases[];
  /**
   * @remarks
   * list token
   * 
   * @example
   * testNextToken
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3A44E113-9962-5B0B-AB92-14060EFE3164
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aliases: 'Aliases',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliases: { 'type': 'array', 'itemType': ListFlowAliasesResponseBodyAliases },
      nextToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.aliases)) {
      $dara.Model.validateArray(this.aliases);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

