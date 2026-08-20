// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalAliDingMeetingResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
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
   * The creation time.
   * 
   * @example
   * 2025-11-12T03:08:56Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The name of the bot.
   * 
   * @example
   * p-toolset-80a4520e-b35c-4e8b-acf7-3a01c7307522
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 247FBC97-433C-544A-BB29-98F572C06E9F
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
   * 2000358
   */
  sourceId?: string;
  /**
   * @remarks
   * The signing status. Valid values:
   * 
   * - CREATED: Created but not signed.
   * - SUCCESS: Signed.
   * - STOP: Terminated.
   * 
   * @example
   * {\\"observedGeneration\\": 2, \\"servicesInstances\\": {}, \\"observedTime\\": \\"2026-03-05T16:00:09Z\\", \\"servicesWithPendingChanges\\": [], \\"latestEnvironmentDeploymentName\\": \\"manual-1772726409137-lmvsqr\\"}
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      directoryId: 'directoryId',
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

