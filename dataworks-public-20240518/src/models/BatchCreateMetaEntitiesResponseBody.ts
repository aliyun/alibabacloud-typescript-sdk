// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetaEntityWriteResult } from "./MetaEntityWriteResult";


export class BatchCreateMetaEntitiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9E0C8E7A-C6BE-5A73-9562-2A030A80E8C6
   */
  requestId?: string;
  /**
   * @remarks
   * A list of results for the batch creation operation. This list provides the success status and any error messages for each individual entity in the request.
   */
  results?: MetaEntityWriteResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. This parameter returns `true` even if creating some entities fails. To determine the outcome for each entity, check the `Success` and `ErrorMessage` fields in the `Results` array.
   * 
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

