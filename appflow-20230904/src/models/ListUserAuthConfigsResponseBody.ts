// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserAuthConfigsResponseBodyUserAuthConfigs extends $dara.Model {
  /**
   * @remarks
   * The credential ID.
   * 
   * @example
   * uac-xxxxxxxx
   */
  authConfigId?: string;
  /**
   * @remarks
   * The credential name.
   * 
   * @example
   * name
   */
  authConfigName?: string;
  /**
   * @remarks
   * The authentication type.
   * 
   * @example
   * ApiKey
   */
  authType?: string;
  /**
   * @remarks
   * The ID of the connector.
   * 
   * @example
   * connector-xxxxxxxxx
   */
  connectorId?: string;
  /**
   * @remarks
   * The version of the connector.
   * 
   * @example
   * 1
   */
  connectorVersion?: string;
  /**
   * @remarks
   * The number of connection flows that use this credential.
   * 
   * @example
   * 1
   */
  flowCount?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-04-01 14:22:33
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2026-04-01 14:22:33
   */
  gmtModified?: string;
  static names(): { [key: string]: string } {
    return {
      authConfigId: 'AuthConfigId',
      authConfigName: 'AuthConfigName',
      authType: 'AuthType',
      connectorId: 'ConnectorId',
      connectorVersion: 'ConnectorVersion',
      flowCount: 'FlowCount',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authConfigId: 'string',
      authConfigName: 'string',
      authType: 'string',
      connectorId: 'string',
      connectorVersion: 'string',
      flowCount: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListUserAuthConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token for the next query.
   * 
   * @example
   * AAAAAVY3rYiv9VoUJQSiCitgjgRBp055u+7M/ZFoi7I0NZHJj8bgHiGAwZWnCMJPepC+WQbLSjoLewJIqkMQqvaJO7M=
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 35A48818-81F2-506C-891C-2296BE8DD667
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 0
   */
  totalCount?: number;
  /**
   * @remarks
   * The user authentication credentials.
   */
  userAuthConfigs?: ListUserAuthConfigsResponseBodyUserAuthConfigs[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      userAuthConfigs: 'UserAuthConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
      userAuthConfigs: { 'type': 'array', 'itemType': ListUserAuthConfigsResponseBodyUserAuthConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.userAuthConfigs)) {
      $dara.Model.validateArray(this.userAuthConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

