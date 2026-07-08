// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserAuthConfigsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The name of the filter field.
   * 
   * @example
   * AuthConfigName
   */
  name?: string;
  /**
   * @remarks
   * The list of filter values. The valid range for N is 1 to 10.
   */
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
   * @remarks
   * The authentication type.
   * 
   * @example
   * QQBotAccessToken
   */
  authType?: string;
  /**
   * @remarks
   * The ID of the connector.
   * 
   * This parameter is required.
   * 
   * @example
   * connector-88d2c03da8c9410e8a91
   */
  connectorId?: string;
  /**
   * @remarks
   * The version of the connector.
   * 
   * @example
   * 6
   */
  connectorVersion?: string;
  /**
   * @remarks
   * The query conditions.
   */
  filter?: ListUserAuthConfigsRequestFilter[];
  /**
   * @remarks
   * The maximum number of entries.
   * 
   * @example
   * 20
   */
  maxResults?: string;
  /**
   * @remarks
   * The pagination token for the request.
   * 
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

