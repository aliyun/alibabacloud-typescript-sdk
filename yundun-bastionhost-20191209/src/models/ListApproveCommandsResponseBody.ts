// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApproveCommandsResponseBodyApproveCommands extends $dara.Model {
  /**
   * @remarks
   * The ID of the command to be reviewed.
   * 
   * @example
   * 1
   */
  approveCommandId?: string;
  /**
   * @remarks
   * The username of the asset account that is used for O\\&M.
   * 
   * @example
   * root
   */
  assetAccountName?: string;
  /**
   * @remarks
   * The IP address of the asset for O\\&M.
   * 
   * @example
   * 10.167.XX.XX
   */
  assetIp?: string;
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * poros-test
   */
  assetName?: string;
  /**
   * @remarks
   * The source IP address from which the application is submitted.
   * 
   * @example
   * 172.18.XX.XX
   */
  clientIp?: string;
  /**
   * @remarks
   * The Bastionhost user who submitted the O\\&M application.
   * 
   * @example
   * test
   */
  clientUser?: string;
  /**
   * @remarks
   * The command to be reviewed.
   * 
   * @example
   * /bin/bash
   */
  command?: string;
  /**
   * @remarks
   * The time when the O\\&M application was submitted. The value is a UNIX timestamp. Unit: seconds.
   * 
   * @example
   * 1679393152
   */
  createTime?: string;
  /**
   * @remarks
   * The O\\&M protocol.
   * 
   * @example
   * SSH
   */
  protocolName?: string;
  /**
   * @remarks
   * The ID of the O\\&M session that triggered the review.
   * 
   * @example
   * 95f873ab64a76d5b0000000000004d5e
   */
  sessionId?: string;
  /**
   * @remarks
   * The status of the review. Valid values: **Wait**: The command is pending review.
   * 
   * @example
   * Wait
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      approveCommandId: 'ApproveCommandId',
      assetAccountName: 'AssetAccountName',
      assetIp: 'AssetIp',
      assetName: 'AssetName',
      clientIp: 'ClientIp',
      clientUser: 'ClientUser',
      command: 'Command',
      createTime: 'CreateTime',
      protocolName: 'ProtocolName',
      sessionId: 'SessionId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveCommandId: 'string',
      assetAccountName: 'string',
      assetIp: 'string',
      assetName: 'string',
      clientIp: 'string',
      clientUser: 'string',
      command: 'string',
      createTime: 'string',
      protocolName: 'string',
      sessionId: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApproveCommandsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The commands to be reviewed.
   */
  approveCommands?: ListApproveCommandsResponseBodyApproveCommands[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E3EF7711-766D-5888-997B-EFBA76809229
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of commands to be reviewed.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      approveCommands: 'ApproveCommands',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approveCommands: { 'type': 'array', 'itemType': ListApproveCommandsResponseBodyApproveCommands },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.approveCommands)) {
      $dara.Model.validateArray(this.approveCommands);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

