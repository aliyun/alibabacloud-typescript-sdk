// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserAuthConfigsResponseBodyUserAuthConfigs extends $dara.Model {
  /**
   * @example
   * uac-xxxxxxxx
   */
  authConfigId?: string;
  /**
   * @example
   * name
   */
  authConfigName?: string;
  /**
   * @example
   * ApiKey
   */
  authType?: string;
  /**
   * @example
   * connector-xxxxxxxxx
   */
  connectorId?: string;
  /**
   * @example
   * 1
   */
  connectorVersion?: string;
  /**
   * @example
   * 1
   */
  flowCount?: number;
  /**
   * @example
   * 2026-04-01 14:22:33
   */
  gmtCreate?: string;
  /**
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
   * @example
   * 20
   */
  maxResults?: number;
  /**
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
   * @example
   * 0
   */
  totalCount?: number;
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

