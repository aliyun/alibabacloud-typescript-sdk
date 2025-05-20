// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHDMAliyunResourceSyncResultResponseBodyDataSubResultsResourceSyncSubResult extends $dara.Model {
  errMsg?: string;
  resourceType?: string;
  success?: boolean;
  syncCount?: number;
  static names(): { [key: string]: string } {
    return {
      errMsg: 'ErrMsg',
      resourceType: 'ResourceType',
      success: 'Success',
      syncCount: 'SyncCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errMsg: 'string',
      resourceType: 'string',
      success: 'boolean',
      syncCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

