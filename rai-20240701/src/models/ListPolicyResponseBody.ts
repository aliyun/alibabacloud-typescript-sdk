// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicyResponseBodyPolicyInfoList extends $dara.Model {
  /**
   * @remarks
   * Modification time.
   * 
   * @example
   * 1731204769000
   */
  gmtModified?: number;
  isSidecarPolicy?: number;
  /**
   * @remarks
   * Tag policy ID.
   * 
   * @example
   * 16
   */
  policyId?: number;
  /**
   * @remarks
   * Policy identifier.
   * 
   * @example
   * x1bc5xgs4uhx
   */
  policyIdentifier?: string;
  /**
   * @remarks
   * Permission policy name.
   * 
   * @example
   * testPolicy
   */
  policyName?: string;
  sceneType?: number;
  static names(): { [key: string]: string } {
    return {
      gmtModified: 'GmtModified',
      isSidecarPolicy: 'IsSidecarPolicy',
      policyId: 'PolicyId',
      policyIdentifier: 'PolicyIdentifier',
      policyName: 'PolicyName',
      sceneType: 'SceneType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtModified: 'number',
      isSidecarPolicy: 'number',
      policyId: 'number',
      policyIdentifier: 'string',
      policyName: 'string',
      sceneType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code, 00000 indicates success; other values indicate failure.
   * 
   * @example
   * 00000
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code description.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * If there is an error, returns the error message.
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * Page number, consistent with the PageNumber in the request.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, the maximum number of results returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * List of policy objects.
   */
  policyInfoList?: ListPolicyResponseBodyPolicyInfoList[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Possible values are:
   * - True: Call succeeded.
   * - False: Call failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      policyInfoList: 'PolicyInfoList',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      policyInfoList: { 'type': 'array', 'itemType': ListPolicyResponseBodyPolicyInfoList },
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.policyInfoList)) {
      $dara.Model.validateArray(this.policyInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

