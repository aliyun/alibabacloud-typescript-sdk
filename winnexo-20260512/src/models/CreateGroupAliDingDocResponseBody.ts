// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateGroupAliDingDocResponseBody extends $dara.Model {
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
   * The creation time.
   * 
   * @example
   * 2025-11-14T02:18:27Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The project group ID.
   * 
   * @example
   * exampleGroupId
   */
  groupId?: string;
  /**
   * @remarks
   * The operation message.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The image name.
   * 
   * @example
   * SampleName.pdf
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019FF406-1B10-0065-A97D-2D1920C2A03D
   */
  requestId?: string;
  /**
   * @remarks
   * The permission scope.
   * 
   * @example
   * TENANT
   */
  scope?: string;
  /**
   * @remarks
   * The original project ID.
   * 
   * @example
   * src_feishu_doc_1
   */
  sourceId?: string;
  /**
   * @remarks
   * The task running status.
   * 
   * @example
   * {\\"observedGeneration\\": 7, \\"servicesInstances\\": {}, \\"observedTime\\": \\"2025-12-17T11:57:07Z\\", \\"servicesWithPendingChanges\\": [], \\"latestEnvironmentDeploymentName\\": \\"manual-1765972627273-k7GZvr\\"}
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      directoryId: 'directoryId',
      gmtCreate: 'gmtCreate',
      groupId: 'groupId',
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
      groupId: 'string',
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

