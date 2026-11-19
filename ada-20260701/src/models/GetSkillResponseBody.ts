// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSkillResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the current caller can delete the skill.
   * 
   * @example
   * true
   */
  canDelete?: boolean;
  /**
   * @remarks
   * Indicates whether the current caller can modify the skill.
   * 
   * @example
   * true
   */
  canModify?: boolean;
  /**
   * @remarks
   * The creation time of the skill. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1760000000000
   */
  createdAt?: number;
  /**
   * @remarks
   * The description in the current primary record of the skill.
   * 
   * @example
   * A skill for performing code review and risk alerts
   */
  description?: string;
  /**
   * @remarks
   * The download URL of the bundle. This field is returned when the network is specified, an accessible artifact exists, and presigning is successful.
   * 
   * @example
   * https://example.com/artifacts/code-review-v2.zip?signature=example
   */
  downloadUrl?: string;
  /**
   * @remarks
   * The network type actually used to generate the download URL.
   * 
   * @example
   * public
   */
  downloadUrlNetwork?: string;
  /**
   * @remarks
   * The URL of the skill icon, which is derived from the iconUrl in the metadata. This field may be empty if no icon is configured.
   * 
   * @example
   * https://example.com/icons/code-review.png
   */
  iconUrl?: string;
  /**
   * @remarks
   * The metadata of the skill, which is mapped to the metadata field in the backend response.
   * 
   * @example
   * {"skillMd":"# Code Review\\nCheck code quality.","artifactId":"artifact_example003"}
   */
  metadata?: any;
  /**
   * @remarks
   * The name of the skill.
   * 
   * @example
   * code-review
   */
  name?: string;
  /**
   * @remarks
   * Indicates whether the skill is an official skill.
   * 
   * @example
   * false
   */
  official?: boolean;
  /**
   * @remarks
   * The request ID, which is used for Tracing Analysis and troubleshooting.
   * 
   * @example
   * 0A1B2C3D-4E5F-6789-ABCD-EF0123456789
   */
  requestId?: string;
  /**
   * @remarks
   * The skill ID.
   * 
   * @example
   * skill_example123
   */
  skillId?: string;
  /**
   * @remarks
   * The current status of the skill. Common values are DRAFT and PUBLISHED.
   * 
   * @example
   * PUBLISHED
   */
  status?: string;
  /**
   * @remarks
   * The update time of the skill. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1760000300000
   */
  updatedAt?: number;
  /**
   * @remarks
   * The visibility of the current skill. Common values are user and tenant.
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

