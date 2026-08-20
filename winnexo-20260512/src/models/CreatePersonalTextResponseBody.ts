// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePersonalTextResponseBody extends $dara.Model {
  /**
   * @remarks
   * SUCCESS indicates success. In case of failure, the corresponding error type is returned, such as ERR_BAD_REQUEST, ERR_VALIDATION_FAILED, or ERR_INTERNAL_SERVER_ERROR.
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
   * The creation time in ISO 8601 format.
   * 
   * @example
   * 2026-05-22 18:18:56
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Instance i-0jl6hlcbtuo4eqg7puni not found
   */
  message?: string;
  /**
   * @remarks
   * The updated filter view name.
   * 
   * @example
   * p-toolset-3dcef7ca-31b9-4d1c-8692-1ef03099cad3
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04EE99E6-A0D9-5B04-81D1-7BEC0CB0AFDF
   */
  requestId?: string;
  /**
   * @remarks
   * The travel scale of the integration partner.
   * 
   * @example
   * read:user,read:repo,write:repo,read:org,read:group
   */
  scope?: string;
  /**
   * @remarks
   * The source ID.
   * 
   * @example
   * 2000398
   */
  sourceId?: string;
  /**
   * @remarks
   * The filter status.
   * 
   * - 0: All
   * 
   * - 1: Unconfirmed
   * 
   * - 3: Ignored
   * 
   * - 4: Rejected
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

