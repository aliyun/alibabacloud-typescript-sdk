// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHistoryDeveloperRequest extends $dara.Model {
  enterpriseId?: number;
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 1
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      enterpriseId: 'enterpriseId',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseId: 'number',
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

