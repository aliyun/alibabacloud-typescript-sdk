// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCnameFlatteningResponseBody extends $dara.Model {
  /**
   * @remarks
   * The flattening mode. Valid values:
   * - flatten_all: Flattens all.
   * - flatten_at_root: Flattens only the root domain. This is the default value.
   * 
   * @example
   * flatten_all
   */
  flattenMode?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F61CDR30-E83C-4FDA-BF73-9A94CDD44229
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      flattenMode: 'FlattenMode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flattenMode: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

