// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishStandardRequestPublishCommand extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically publish after approval. Default value: true.
   */
  autoPublishAfterApproval?: boolean;
  /**
   * @remarks
   * The review comment. Maximum length: 128 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The standard ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The specified reviewers.
   */
  reviewerIdList?: string[];
  /**
   * @remarks
   * The stage of the standard. Valid values: DEV and PROD. Default value: DEV.
   * 
   * @example
   * DEV
   */
  standardStage?: string;
  /**
   * @remarks
   * The version number. Default value: -1 (latest version).
   * 
   * @example
   * 1
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      autoPublishAfterApproval: 'AutoPublishAfterApproval',
      comment: 'Comment',
      id: 'Id',
      reviewerIdList: 'ReviewerIdList',
      standardStage: 'StandardStage',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoPublishAfterApproval: 'boolean',
      comment: 'string',
      id: 'number',
      reviewerIdList: { 'type': 'array', 'itemType': 'string' },
      standardStage: 'string',
      version: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.reviewerIdList)) {
      $dara.Model.validateArray(this.reviewerIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishStandardRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The publish command.
   * 
   * This parameter is required.
   */
  publishCommand?: PublishStandardRequestPublishCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      publishCommand: 'PublishCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      publishCommand: PublishStandardRequestPublishCommand,
    };
  }

  validate() {
    if(this.publishCommand && typeof (this.publishCommand as any).validate === 'function') {
      (this.publishCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

