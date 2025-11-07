// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGitRepositoryContentsResponseBodyContents extends $dara.Model {
  /**
   * @example
   * mydir
   */
  content?: string;
  /**
   * @example
   * mydir
   */
  name?: string;
  /**
   * @example
   * dir1
   */
  path?: string;
  /**
   * @example
   * dir
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      name: 'Name',
      path: 'Path',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      name: 'string',
      path: 'string',
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

export class ListGitRepositoryContentsResponseBody extends $dara.Model {
  contents?: ListGitRepositoryContentsResponseBodyContents[];
  /**
   * @example
   * 1
   */
  count?: number;
  /**
   * @example
   * 2075899A-585D-4A41-A9B2-28DA8534
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      contents: 'Contents',
      count: 'Count',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': ListGitRepositoryContentsResponseBodyContents },
      count: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

