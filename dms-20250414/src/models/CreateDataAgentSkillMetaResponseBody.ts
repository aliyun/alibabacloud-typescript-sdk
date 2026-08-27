// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataAgentSkillMetaResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID of the parent account.
   * 
   * @example
   * 16738266********
   */
  aliyunParentUid?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 20372822********
   */
  aliyunUid?: string;
  /**
   * @remarks
   * The creator name.
   * 
   * @example
   * HaoY*****
   */
  creatorUserName?: string;
  /**
   * @remarks
   * The skill description.
   * 
   * @example
   * This is a demo skill description.
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the skill is available. Valid values: true and false.
   * 
   * @example
   * true
   */
  enabled?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  gmtCreated?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2025-12-11T14:04:32.000+00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * The skill parsing error message.
   * - When the skill status is INVALID, the parsing error message is returned.
   * 
   * @example
   * SKILL.md file not exist.
   */
  parseError?: string;
  /**
   * @remarks
   * The region.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The skill source.
   * 
   * @example
   * User
   */
  skillFrom?: string;
  /**
   * @remarks
   * The skill ID.
   * 
   * @example
   * ski-04pomiln*************j0
   */
  skillId?: string;
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * data-query-skill
   */
  skillName?: string;
  /**
   * @remarks
   * The skill status. Valid values:
   * - INIT: Not ready.
   * - ACTIVE: Active.
   * - INVALID: Invalid.
   * 
   * @example
   * ACTIVE
   */
  skillStatus?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 11if52e44**********edbv6
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunParentUid: 'AliyunParentUid',
      aliyunUid: 'AliyunUid',
      creatorUserName: 'CreatorUserName',
      description: 'Description',
      enabled: 'Enabled',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      parseError: 'ParseError',
      region: 'Region',
      skillFrom: 'SkillFrom',
      skillId: 'SkillId',
      skillName: 'SkillName',
      skillStatus: 'SkillStatus',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunParentUid: 'string',
      aliyunUid: 'string',
      creatorUserName: 'string',
      description: 'string',
      enabled: 'number',
      gmtCreated: 'string',
      gmtModified: 'string',
      parseError: 'string',
      region: 'string',
      skillFrom: 'string',
      skillId: 'string',
      skillName: 'string',
      skillStatus: 'string',
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

export class CreateDataAgentSkillMetaResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response struct.
   */
  data?: CreateDataAgentSkillMetaResponseBodyData;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * InvalidTid
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when a system-level request failure occurs.
   * 
   * @example
   * Specified parameter Tid is not valid.
   */
  errorMessage?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E0D21075-CD3E-4D98-8264-FD8AD04A63B6
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.                                 
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: CreateDataAgentSkillMetaResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

