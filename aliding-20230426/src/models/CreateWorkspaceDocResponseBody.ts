// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWorkspaceDocResponseBody extends $dara.Model {
  /**
   * @example
   * YRBcvy
   */
  dentryUuid?: string;
  /**
   * @example
   * QoJGq7xxx
   */
  docKey?: string;
  /**
   * @example
   * YRBGv0Ye
   */
  nodeId?: string;
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * https://xxx/workspaceId/docs/nodeId
   */
  url?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  /**
   * @example
   * YRBGvy
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      dentryUuid: 'dentryUuid',
      docKey: 'docKey',
      nodeId: 'nodeId',
      requestId: 'requestId',
      url: 'url',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dentryUuid: 'string',
      docKey: 'string',
      nodeId: 'string',
      requestId: 'string',
      url: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

