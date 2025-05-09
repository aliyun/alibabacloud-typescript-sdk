// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSensitivityLevelResponseBodySensitivityLevelList } from "./ListSensitivityLevelResponseBodySensitivityLevelList";


export class ListSensitivityLevelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID. You can use the ID to query logs and troubleshoot issues.
   * 
   * @example
   * 4E1D2B4D-3E53-4ABC-999D-1D2520B3471A
   */
  requestId?: string;
  /**
   * @remarks
   * The sensitivity levels.
   */
  sensitivityLevelList?: ListSensitivityLevelResponseBodySensitivityLevelList[];
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
      sensitivityLevelList: 'SensitivityLevelList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      sensitivityLevelList: { 'type': 'array', 'itemType': ListSensitivityLevelResponseBodySensitivityLevelList },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.sensitivityLevelList)) {
      $dara.Model.validateArray(this.sensitivityLevelList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

