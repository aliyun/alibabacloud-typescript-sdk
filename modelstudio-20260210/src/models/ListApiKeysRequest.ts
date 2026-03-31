// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiKeysRequest extends $dara.Model {
  /**
   * @example
   * 3076140
   */
  apiKeyId?: number;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @example
   * w9Z+S5+TZyw=
   */
  nextToken?: string;
  /**
   * @example
   * ws-ac3ef438bec22dc5
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

