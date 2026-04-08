// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListExternalServicesRequest extends $dara.Model {
  importableOnly?: boolean;
  limit?: number;
  nameLike?: string;
  paiWorkspaceId?: string;
  sourceType?: string;
  static names(): { [key: string]: string } {
    return {
      importableOnly: 'importableOnly',
      limit: 'limit',
      nameLike: 'nameLike',
      paiWorkspaceId: 'paiWorkspaceId',
      sourceType: 'sourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      importableOnly: 'boolean',
      limit: 'number',
      nameLike: 'string',
      paiWorkspaceId: 'string',
      sourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

