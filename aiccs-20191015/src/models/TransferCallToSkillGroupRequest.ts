// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TransferCallToSkillGroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * username@example.com
   */
  accountName?: string;
  /**
   * @example
   * 7719786
   */
  callId?: string;
  /**
   * @example
   * 46c1341e-2648-447a-9b11-70b6a298d94d
   */
  clientToken?: string;
  /**
   * @example
   * 7719788
   */
  connectionId?: string;
  /**
   * @example
   * 0
   */
  holdConnectionId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * true
   */
  isSingleTransfer?: boolean;
  /**
   * @example
   * 7719787
   */
  jobId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 356543
   */
  skillGroupId?: number;
  /**
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      callId: 'CallId',
      clientToken: 'ClientToken',
      connectionId: 'ConnectionId',
      holdConnectionId: 'HoldConnectionId',
      instanceId: 'InstanceId',
      isSingleTransfer: 'IsSingleTransfer',
      jobId: 'JobId',
      skillGroupId: 'SkillGroupId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      callId: 'string',
      clientToken: 'string',
      connectionId: 'string',
      holdConnectionId: 'string',
      instanceId: 'string',
      isSingleTransfer: 'boolean',
      jobId: 'string',
      skillGroupId: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

