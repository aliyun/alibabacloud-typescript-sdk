// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTranscodeTemplatesRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  transcodeTemplateGroupId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  transcodeTemplateIdList?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
      transcodeTemplateIdList: 'TranscodeTemplateIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      transcodeTemplateGroupId: 'string',
      transcodeTemplateIdList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

