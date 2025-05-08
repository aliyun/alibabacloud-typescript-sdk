// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagValuesResponseBody extends $dara.Model {
  /**
   * @remarks
   * A pagination token.
   * 
   * @example
   * AAAAAVz7BQqj2xtiNSC3d3RAD38=
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0631D623-D917-1C2D-ACD6-5B3B19XXXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The information of the tag values.
   */
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      requestId: 'RequestId',
      values: 'Values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      requestId: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

