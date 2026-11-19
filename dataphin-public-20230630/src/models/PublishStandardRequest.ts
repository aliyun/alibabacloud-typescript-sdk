// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishStandardRequestPublishCommand extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to automatically publish the standard after the approval succeeds. Default value: true.
   */
  autoPublishAfterApproval?: boolean;
  /**
   * @remarks
   * The review comment. The comment can be up to 128 characters in length.
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
   * The version number. Default value: -1, which indicates the latest version.
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
   * The ID of the user who performs the operation.
   * 
   * @example
   * 30001011
   */
  opUserId?: string;
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
      opUserId: 'OpUserId',
      publishCommand: 'PublishCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      opUserId: 'string',
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

