// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeProductResourceTagKeyListRequest extends $dara.Model {
  /**
   * @remarks
   * The pagination token.
   * 
   * @example
   * dbc2826f237e****
   */
  nextToken?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

