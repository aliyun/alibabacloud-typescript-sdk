// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConnectorModelsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of a service account key. This parameter is required when multiple keys exist. You can leave this parameter empty if only one key exists.
   * 
   * @example
   * ckey-xxxx
   */
  connectorKeyId?: string;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page.
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

