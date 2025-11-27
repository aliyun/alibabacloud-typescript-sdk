// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBizTracesRequest extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * aa9d0e569b88098a0e3155c29b473201a
   */
  nextToken?: string;
  /**
   * @example
   * default-cms-xxxxxx-cn-beijing
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

