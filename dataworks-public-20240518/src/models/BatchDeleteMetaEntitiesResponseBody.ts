// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetaEntityWriteResult } from "./MetaEntityWriteResult";


export class BatchDeleteMetaEntitiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique identifier of the request.
   * 
   * @example
   * 1FC02D76-4A94-5D97-B52C-00A031B95359
   */
  requestId?: string;
  /**
   * @remarks
   * An array of deletion results, one for each requested entity. Each result indicates whether the deletion was successful and includes an error message upon failure.
   */
  results?: MetaEntityWriteResult[];
  /**
   * @remarks
   * Indicates whether the request was successful. This parameter returns true even if the deletion of some entities fails. To check the status of each individual deletion, see the Success and ErrorMessage fields in the Results array.
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

