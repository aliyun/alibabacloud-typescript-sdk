// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalAlidingDocResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The folder ID.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * The publicly accessible URL of the AliDing online document.
   * 
   * @example
   * https://example.com/winnexo/resource
   */
  filePublicUrl?: string;
  /**
   * @remarks
   * The timestamp when the customer group was created. Unit: milliseconds.
   * 
   * @example
   * 2026-04-22T08:15:28.000+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The pipeline name.
   * 
   * @example
   * user_paswd_104
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E68654BD-F7BA-5837-8686-5645D739A47C
   */
  requestId?: string;
  /**
   * @remarks
   * The permission scope.
   * 
   * @example
   * user_info projects pull_requests hook gists emails
   */
  scope?: string;
  /**
   * @remarks
   * The unique identifier on the business system side, that is, the business ID.
   * 
   * @example
   * 2000413
   */
  sourceId?: string;
  /**
   * @remarks
   * The call status. Valid values:
   * - **PENDING**: Waiting for receipt.
   * - **SUCCESS**: Succeeded.
   * - **FAILED**: Failed.
   * - **TIMEOUT**: Timed out.
   * 
   * @example
   * {\\"servicesInstances\\": {}, \\"servicesWithPendingChanges\\": []}
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

