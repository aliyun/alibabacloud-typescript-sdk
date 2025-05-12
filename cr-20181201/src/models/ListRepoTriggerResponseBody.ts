// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRepoTriggerResponseBodyTriggers } from "./ListRepoTriggerResponseBodyTriggers";


export class ListRepoTriggerResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * *   `true`: The request is successful.
   * *   `false`: The request fails.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 2CA76D52-A8F0-4D0B-854E-FBD9F6C99049
   */
  requestId?: string;
  /**
   * @remarks
   * The triggers of the repository.
   */
  triggers?: ListRepoTriggerResponseBodyTriggers[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      triggers: 'Triggers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      triggers: { 'type': 'array', 'itemType': ListRepoTriggerResponseBodyTriggers },
    };
  }

  validate() {
    if(Array.isArray(this.triggers)) {
      $dara.Model.validateArray(this.triggers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

