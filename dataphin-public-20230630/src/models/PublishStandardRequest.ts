// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishStandardRequestPublishCommand extends $dara.Model {
  autoPublishAfterApproval?: boolean;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  id?: number;
  reviewerIdList?: string[];
  /**
   * @example
   * DEV
   */
  standardStage?: string;
  /**
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
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
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

