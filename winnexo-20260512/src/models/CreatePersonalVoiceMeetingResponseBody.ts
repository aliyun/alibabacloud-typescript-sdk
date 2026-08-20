// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalVoiceMeetingResponseBody extends $dara.Model {
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
   * The bound directory ID. This value echoes the directoryId provided in the request body. If no directoryId is specified, the value is null because the default root directory is used.
   * 
   * @example
   * exampleDirectoryId
   */
  directoryId?: string;
  /**
   * @remarks
   * The creation time in ISO 8601 format.
   * 
   * @example
   * 2026-04-22T08:15:28.000+00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The knowledge base name.
   * 
   * @example
   * p-toolset-e95d1287-3d40-487a-bcce-6e6252c7a793
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A5241B90-8FF4-565C-977A-0CE1842AED72
   */
  requestId?: string;
  /**
   * @remarks
   * The resource scope. The value is fixed to PERSONAL.
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
   * 8
   */
  sourceId?: string;
  /**
   * @remarks
   * The resource status. The initial status during the creation process is typically PENDING. If the on_create process fails, the status is FAILED.
   * 
   * @example
   * {\\"observedGeneration\\": 4, \\"servicesInstances\\": {}, \\"observedTime\\": \\"2025-10-31T03:48:27Z\\", \\"servicesWithPendingChanges\\": [], \\"latestEnvironmentDeploymentName\\": \\"manual-1761882507097-Eu1vIP\\"}
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

