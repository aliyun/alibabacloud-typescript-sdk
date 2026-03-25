// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiKeysRequest extends $dara.Model {
  /**
   * @remarks
   * API Key ID。
   * 
   * @example
   * 3685841
   */
  apiKeyId?: number;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * VHayKbYhhm4=
   */
  nextToken?: string;
  /**
   * @example
   * llm-ep8ba0dr6seiddri
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyId: 'apiKeyId',
      description: 'description',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyId: 'number',
      description: 'string',
      maxResults: 'number',
      nextToken: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

