// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetaEntityWriteResult } from "./MetaEntityWriteResult";


export class BatchDeleteMetaEntitiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1FC02D76-4A94-5D97-B52C-00A031B95359
   */
  requestId?: string;
  /**
   * @remarks
   * The list of entity deletion results, which returns the success status and failure reason for each entity.
   */
  results?: MetaEntityWriteResult[];
  /**
   * @remarks
   * Indicates whether the request is successful. When some entities fail, this field still returns true. Check Results[].Success and Results[].ErrorMessage for individual results.
   * 
   * @example
   * []
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

