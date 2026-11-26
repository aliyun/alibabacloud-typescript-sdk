// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKnowledgeBaseAliDingDocResponseBody extends $dara.Model {
  /**
   * @remarks
   * The result code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * The public URL of the document. This value is echoed from the request parameter.
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  filePublicUrl?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-05-22 16:03:27
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The error details.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * p-toolset-b8a1de80-e9f5-49f3-8a12-873d378889c6
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F42FC60B-C54D-5DFB-A8EC-04625BFFF1F7
   */
  requestId?: string;
  /**
   * @remarks
   * The permission scope.
   * 
   * @example
   * repo
   */
  scope?: string;
  /**
   * @remarks
   * The unique identifier on the business system side, which is the business ID.
   * 
   * @example
   * 8
   */
  sourceId?: string;
  /**
   * @remarks
   * The refund status. If the refund is in progress, you must query and confirm the refund status. Valid values:
   * - SUCCESS: Succeeded.
   * - FAIL: Failed.
   * - WAIT_PAY: Waiting for refund.
   * - EXPIRE: Expired.
   * - PAYING: Refunding.
   * - TERMINATE: Terminated.
   * 
   * @example
   * {\"observedGeneration\": 7, \"servicesInstances\": {}, \"observedTime\": \"2025-12-17T11:57:07Z\", \"servicesWithPendingChanges\": [], \"latestEnvironmentDeploymentName\": \"manual-1765972627273-k7GZvr\"}
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      directoryId: 'directoryId',
      filePublicUrl: 'filePublicUrl',
      gmtCreate: 'gmtCreate',
      message: 'message',
      name: 'name',
      requestId: 'requestId',
      scope: 'scope',
      sourceId: 'sourceId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      directoryId: 'string',
      filePublicUrl: 'string',
      gmtCreate: 'string',
      message: 'string',
      name: 'string',
      requestId: 'string',
      scope: 'string',
      sourceId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

