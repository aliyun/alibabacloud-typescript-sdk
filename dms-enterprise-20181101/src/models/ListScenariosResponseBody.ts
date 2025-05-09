// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListScenariosResponseBodyScenarioList } from "./ListScenariosResponseBodyScenarioList";


export class ListScenariosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * UnknownError
   */
  errorMessage?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7FAD400F-7A5C-4193-8F9A-39D86C4F0231
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the returned business scenarios.
   */
  scenarioList?: ListScenariosResponseBodyScenarioList[];
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
      scenarioList: 'ScenarioList',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      scenarioList: { 'type': 'array', 'itemType': ListScenariosResponseBodyScenarioList },
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.scenarioList)) {
      $dara.Model.validateArray(this.scenarioList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

