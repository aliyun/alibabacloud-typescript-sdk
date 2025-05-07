// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindUserAvailbleResourcesRequest extends $dara.Model {
  bussinessCode?: string;
  currPage?: number;
  pageSize?: number;
  resourceType?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      bussinessCode: 'bussinessCode',
      currPage: 'currPage',
      pageSize: 'pageSize',
      resourceType: 'resourceType',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bussinessCode: 'string',
      currPage: 'number',
      pageSize: 'number',
      resourceType: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

