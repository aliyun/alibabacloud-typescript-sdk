// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRegistryNamespacesRequest extends $dara.Model {
  /**
   * @example
   * key
   */
  keyword?: string;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * hg7nXVngyM6tQlfXYzM1uI/7dKNGp1JMgsKtvCagmtY=
   */
  nextToken?: string;
  /**
   * @example
   * self
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      keyword: 'keyword',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyword: 'string',
      maxResults: 'number',
      nextToken: 'string',
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

