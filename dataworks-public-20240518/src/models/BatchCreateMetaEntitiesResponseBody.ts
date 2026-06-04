// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetaEntityWriteResult } from "./MetaEntityWriteResult";


export class BatchCreateMetaEntitiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 9E0C8E7A-C6BE-5A73-9562-2A030A80E8C6
   */
  requestId?: string;
  results?: MetaEntityWriteResult[];
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      results: 'Results',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      results: { 'type': 'array', 'itemType': MetaEntityWriteResult },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

