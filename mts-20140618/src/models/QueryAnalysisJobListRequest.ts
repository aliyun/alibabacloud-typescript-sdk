// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryAnalysisJobListRequest extends $dara.Model {
  /**
   * @remarks
   * The template analysis job ID list.
   * 
   * This parameter is required.
   * 
   * @example
   * bb558c1cc25b45309aab5be44d19****
   */
  analysisJobIds?: string;
  ownerAccount?: string;
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      analysisJobIds: 'AnalysisJobIds',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisJobIds: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

