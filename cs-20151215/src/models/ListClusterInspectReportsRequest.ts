// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListClusterInspectReportsRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of returned results. Maximum value: 50.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * AK8uQQrxgFKsI3OiS5TbhUQ9R3kPme4I3
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

