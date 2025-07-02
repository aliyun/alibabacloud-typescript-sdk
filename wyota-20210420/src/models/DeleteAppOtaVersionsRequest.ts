// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAppOtaVersionsRequest extends $dara.Model {
  versionUidList?: string[];
  static names(): { [key: string]: string } {
    return {
      versionUidList: 'VersionUidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      versionUidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.versionUidList)) {
      $dara.Model.validateArray(this.versionUidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

