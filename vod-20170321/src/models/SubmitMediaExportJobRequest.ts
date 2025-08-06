// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitMediaExportJobRequest extends $dara.Model {
  jobName?: string;
  match?: string;
  mediaExportConfig?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  mediaType?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      jobName: 'JobName',
      match: 'Match',
      mediaExportConfig: 'MediaExportConfig',
      mediaType: 'MediaType',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobName: 'string',
      match: 'string',
      mediaExportConfig: 'string',
      mediaType: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

