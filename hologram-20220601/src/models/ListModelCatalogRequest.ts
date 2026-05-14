// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListModelCatalogRequest extends $dara.Model {
  /**
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @example
   * uat-assembly-cut-3d-bbig
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

