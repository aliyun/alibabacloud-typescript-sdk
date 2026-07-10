// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApiKeysRequest extends $dara.Model {
  apiKeyName?: string;
  pageNumber?: number;
  pageSize?: number;
  resourceGroupID?: string;
  status?: string;
  teamID?: string;
  userID?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeyName: 'apiKeyName',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupID: 'resourceGroupID',
      status: 'status',
      teamID: 'teamID',
      userID: 'userID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeyName: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupID: 'string',
      status: 'string',
      teamID: 'string',
      userID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

