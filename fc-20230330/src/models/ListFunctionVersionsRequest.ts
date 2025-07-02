// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFunctionVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The sorting mode of function versions. Valid values: BACKWARD and FORWARD.
   * 
   * @example
   * BACKWARD
   */
  direction?: string;
  /**
   * @remarks
   * The number of function versions that are returned.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      direction: 'direction',
      limit: 'limit',
      nextToken: 'nextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      direction: 'string',
      limit: 'number',
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

