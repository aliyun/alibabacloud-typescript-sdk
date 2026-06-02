// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserAuthConfigsRequestFilter extends $dara.Model {
  /**
   * @example
   * AuthConfigName
   */
  name?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserAuthConfigsRequest extends $dara.Model {
  /**
   * @example
   * QQBotAccessToken
   */
  authType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * connector-88d2c03da8c9410e8a91
   */
  connectorId?: string;
  /**
   * @example
   * 6
   */
  connectorVersion?: string;
  filter?: ListUserAuthConfigsRequestFilter[];
  /**
   * @example
   * 20
   */
  maxResults?: string;
  /**
   * @example
   * AAAAAVY3rYiv9VoUJQSiCitgjgQu5rMgGgvUoNWg8LykhA85j8bgHiGAwZWnCMJPepC+WWc0DK5hx1qIycMHVWP2AjQ=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      authType: 'AuthType',
      connectorId: 'ConnectorId',
      connectorVersion: 'ConnectorVersion',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authType: 'string',
      connectorId: 'string',
      connectorVersion: 'string',
      filter: { 'type': 'array', 'itemType': ListUserAuthConfigsRequestFilter },
      maxResults: 'string',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

