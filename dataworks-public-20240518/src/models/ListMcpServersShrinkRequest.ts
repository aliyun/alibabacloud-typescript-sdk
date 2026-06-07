// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMcpServersShrinkRequest extends $dara.Model {
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 12345
   */
  nextToken?: string;
  /**
   * @example
   * mcp
   */
  q?: string;
  /**
   * @example
   * -
   */
  visibilityShrink?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      q: 'Q',
      visibilityShrink: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      q: 'string',
      visibilityShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

