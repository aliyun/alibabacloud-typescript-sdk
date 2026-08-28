// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrecheckSkillUploadViaOssResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The version currently being edited.
   * 
   * @example
   * 1.0.0
   */
  editingVersion?: string;
  /**
   * @remarks
   * The entry path of the Skill package.
   * 
   * @example
   * SKILL.md
   */
  entryPath?: string;
  /**
   * @remarks
   * Indicates whether the Skill already exists.
   */
  exists?: boolean;
  /**
   * @remarks
   * The highest published version.
   * 
   * @example
   * 1.0.0
   */
  maxPublishedVersion?: string;
  /**
   * @remarks
   * The resource owner.
   * 
   * @example
   * alice
   */
  owner?: string;
  /**
   * @remarks
   * The version parsed from the uploaded content.
   * 
   * @example
   * 1.0.0
   */
  parsedVersion?: string;
  /**
   * @remarks
   * The pre-check result code.
   * 
   * @example
   * VALIDATION_FAILED
   */
  precheckCode?: string;
  /**
   * @remarks
   * The reason description.
   * 
   * @example
   * Resource processing completed
   */
  reason?: string;
  /**
   * @remarks
   * The version currently under review.
   * 
   * @example
   * 1.0.0
   */
  reviewingVersion?: string;
  /**
   * @remarks
   * The Skill name.
   * 
   * @example
   * skill-example
   */
  skillName?: string;
  /**
   * @remarks
   * The target version.
   * 
   * @example
   * 1.0.0
   */
  targetVersion?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-1234567890abcdef
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      editingVersion: 'editingVersion',
      entryPath: 'entryPath',
      exists: 'exists',
      maxPublishedVersion: 'maxPublishedVersion',
      owner: 'owner',
      parsedVersion: 'parsedVersion',
      precheckCode: 'precheckCode',
      reason: 'reason',
      reviewingVersion: 'reviewingVersion',
      skillName: 'skillName',
      targetVersion: 'targetVersion',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editingVersion: 'string',
      entryPath: 'string',
      exists: 'boolean',
      maxPublishedVersion: 'string',
      owner: 'string',
      parsedVersion: 'string',
      precheckCode: 'string',
      reason: 'string',
      reviewingVersion: 'string',
      skillName: 'string',
      targetVersion: 'string',
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

export class PrecheckSkillUploadViaOssResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: PrecheckSkillUploadViaOssResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1B2C3D4-E5F6-47A8-90AB-CDEF12345678
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': PrecheckSkillUploadViaOssResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

