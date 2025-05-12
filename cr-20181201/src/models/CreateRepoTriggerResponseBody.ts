// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRepoTriggerResponseBody extends $dara.Model {
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
   * Indicates whether the request is successful.
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
   * B79F5E0E-8770-407D-BCB6-ECF4BA9C****
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the trigger.
   * 
   * @example
   * crw-0z4pf81pgz35****
   */
  triggerId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      triggerId: 'TriggerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      isSuccess: 'boolean',
      requestId: 'string',
      triggerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

