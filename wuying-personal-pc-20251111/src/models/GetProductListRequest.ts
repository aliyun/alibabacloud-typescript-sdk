// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProductListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apiKey?: string;
  configVersion?: string;
  maxResults?: number;
  nextToken?: string;
  sessionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      configVersion: 'ConfigVersion',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      sessionId: 'SessionId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      configVersion: 'string',
      maxResults: 'number',
      nextToken: 'string',
      sessionId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

