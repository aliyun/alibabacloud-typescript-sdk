// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTriggersRequest extends $dara.Model {
  /**
   * @remarks
   * The number of triggers to return.
   * 
   * @example
   * 10
   */
  limit?: number;
  /**
   * @remarks
   * The token that marks the start of the next page of results.
   * 
   * @example
   * MTIzNCNhYmM=
   */
  nextToken?: string;
  /**
   * @remarks
   * The trigger name prefix.
   * 
   * @example
   * my-trigger
   */
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      limit: 'limit',
      nextToken: 'nextToken',
      prefix: 'prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limit: 'number',
      nextToken: 'string',
      prefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

