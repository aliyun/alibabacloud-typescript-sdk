// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListStandardGroupsResponseBodyStandardGroupList } from "./ListStandardGroupsResponseBodyStandardGroupList";


export class ListStandardGroupsResponseBody extends $dara.Model {
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
   * The security rule sets returned.
   */
  standardGroupList?: ListStandardGroupsResponseBodyStandardGroupList[];
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
      standardGroupList: 'StandardGroupList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      standardGroupList: { 'type': 'array', 'itemType': ListStandardGroupsResponseBodyStandardGroupList },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.standardGroupList)) {
      $dara.Model.validateArray(this.standardGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

