// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the current caller can delete the Skill.
   * 
   * @example
   * true
   */
  canDelete?: boolean;
  /**
   * @remarks
   * Indicates whether the current caller can modify the Skill.
   * 
   * @example
   * true
   */
  canModify?: boolean;
  /**
   * @remarks
   * The creation time of the Skill, in Unix millisecond timestamp.
   * 
   * @example
   * 1760000000000
   */
  createdAt?: number;
  /**
   * @remarks
   * The description in the current Skill main record.
   * 
   * @example
   * A Skill for performing code review and risk alerts
   */
  description?: string;
  /**
   * @remarks
   * The bundle download URL. Returned when a network type is specified, an accessible Artifact exists, and pre-signing succeeds.
   * 
   * @example
   * https://example.com/artifacts/code-review-v2.zip?signature=example
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The network type used to generate the download URL.
   * 
   * @example
   * public
   */
  downloadUrlNetwork?: string;
  /**
   * @remarks
   * The Skill icon URL, sourced from the iconUrl in the metadata. This field may be empty if no icon is configured.
   * 
   * @example
   * https://example.com/icons/code-review.png
   */
  iconUrl?: string;
  /**
   * @remarks
   * The Skill metadata, mapped to the metadata field in the backend response.
   * 
   * @example
   * {"skillMd":"# Code Review\\nCheck code quality.","artifactId":"artifact_example003"}
   */
  metadata?: any;
  /**
   * @remarks
   * The Skill name.
   * 
   * @example
   * code-review
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the Skill is an official Skill.
   * 
   * @example
   * false
   */
  official?: boolean;
  /**
   * @remarks
   * The request ID, used for Tracing Analysis and troubleshooting.
   * 
   * @example
   * 0A1B2C3D-4E5F-6789-ABCD-EF0123456789
   */
  requestId?: string;
  /**
   * @remarks
   * Skill ID。
   * 
   * @example
   * skill_example123
   */
  skillId?: string;
  /**
   * @remarks
   * The current Skill status. Common values are DRAFT and PUBLISHED.
   * 
   * @example
   * PUBLISHED
   */
  status?: string;
  /**
   * @remarks
   * The update time of the Skill, in Unix millisecond timestamp.
   * 
   * @example
   * 1760000300000
   */
  updatedAt?: number;
  /**
   * @remarks
   * The visibility of the current Skill. Common values are user and tenant.
   * 
   * @example
   * user
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      canDelete: 'CanDelete',
      canModify: 'CanModify',
      createdAt: 'CreatedAt',
      description: 'Description',
      downloadUrl: 'DownloadUrl',
      downloadUrlNetwork: 'DownloadUrlNetwork',
      iconUrl: 'IconUrl',
      metadata: 'Metadata',
      name: 'Name',
      official: 'Official',
      requestId: 'RequestId',
      skillId: 'SkillId',
      status: 'Status',
      updatedAt: 'UpdatedAt',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canDelete: 'boolean',
      canModify: 'boolean',
      createdAt: 'number',
      description: 'string',
      downloadUrl: 'string',
      downloadUrlNetwork: 'string',
      iconUrl: 'string',
      metadata: 'any',
      name: 'string',
      official: 'boolean',
      requestId: 'string',
      skillId: 'string',
      status: 'string',
      updatedAt: 'number',
      visibility: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

