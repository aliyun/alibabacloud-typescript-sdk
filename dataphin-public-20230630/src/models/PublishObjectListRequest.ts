// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishObjectListRequestPublishCommand extends $dara.Model {
  /**
   * @remarks
   * The publish comment. The string can be up to 1024 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 发布
   */
  comment?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234567
   */
  projectId?: number;
  /**
   * @remarks
   * The list of pending publish record IDs to be published. A maximum of 50 submit IDs can be specified.
   * 
   * This parameter is required.
   */
  submitIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      projectId: 'ProjectId',
      submitIdList: 'SubmitIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      projectId: 'number',
      submitIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.submitIdList)) {
      $dara.Model.validateArray(this.submitIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class PublishObjectListRequest extends $dara.Model {
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
  publishCommand?: PublishObjectListRequestPublishCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      publishCommand: 'PublishCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      publishCommand: PublishObjectListRequestPublishCommand,
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

