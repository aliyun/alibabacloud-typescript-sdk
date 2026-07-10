// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTeamsRequest extends $dara.Model {
  pageNumber?: number;
  pageSize?: number;
  resourceGroupID?: string;
  teamName?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      resourceGroupID: 'resourceGroupID',
      teamName: 'teamName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resourceGroupID: 'string',
      teamName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

