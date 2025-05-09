// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDesensitizationRuleResponseBodyDesensitizationRuleList } from "./ListDesensitizationRuleResponseBodyDesensitizationRuleList";


export class ListDesensitizationRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of masking rules.
   */
  desensitizationRuleList?: ListDesensitizationRuleResponseBodyDesensitizationRuleList[];
  /**
   * @remarks
   * The error code returned if the request failed.
   * 
   * This parameter is required.
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
   * E76DD2E7-EBAC-5724-B163-19AAC233F8F2
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true: The request was successful.
   * *   false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries returned. By default, this parameter is not returned.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      desensitizationRuleList: 'DesensitizationRuleList',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desensitizationRuleList: { 'type': 'array', 'itemType': ListDesensitizationRuleResponseBodyDesensitizationRuleList },
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.desensitizationRuleList)) {
      $dara.Model.validateArray(this.desensitizationRuleList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

