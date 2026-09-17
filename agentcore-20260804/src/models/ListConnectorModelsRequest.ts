// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnectorModelsRequest extends $dara.Model {
  /**
   * @remarks
   * The Connector Key ID. This parameter is not supported in the current version.
   * 
   * @example
   * ckey-xxxx
   */
  connectorKeyId?: string;
  /**
   * @remarks
   * The page size. This parameter is not supported in the current version.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The next page token. This parameter is not supported in the current version.
   * 
   * @example
   * dGVzdA==
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      connectorKeyId: 'connectorKeyId',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connectorKeyId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

