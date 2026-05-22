// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCnameFlatteningResponseBody extends $dara.Model {
  /**
   * @remarks
   * The CNAME flattening mode. Valid values:
   * 
   * *   flatten_all: flattens all CNAMEs.
   * *   flatten_all (default): flattens only the root domain.
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

