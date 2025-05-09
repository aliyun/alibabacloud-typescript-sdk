// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateStandardGroupResponseBodyStandardGroup } from "./CreateStandardGroupResponseBodyStandardGroup";


export class CreateStandardGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request fails.
   * 
   * @example
   * 403
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request fails.
   * 
   * @example
   * xxx
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 34E01EDD-6A16-4CF0-9541-C644D1BE01AA
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the created security rule set.
   */
  standardGroup?: CreateStandardGroupResponseBodyStandardGroup;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**: The request was successful.
   * *   **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      standardGroup: 'StandardGroup',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      standardGroup: CreateStandardGroupResponseBodyStandardGroup,
      success: 'boolean',
    };
  }

  validate() {
    if(this.standardGroup && typeof (this.standardGroup as any).validate === 'function') {
      (this.standardGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

