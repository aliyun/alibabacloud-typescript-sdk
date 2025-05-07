// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateDatasetRequestDatasetConfigSearchSourceConfigs } from "./CreateDatasetRequestDatasetConfigSearchSourceConfigs";


export class CreateDatasetRequestDatasetConfig extends $dara.Model {
  searchSourceConfigs?: CreateDatasetRequestDatasetConfigSearchSourceConfigs[];
  static names(): { [key: string]: string } {
    return {
      searchSourceConfigs: 'SearchSourceConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchSourceConfigs: { 'type': 'array', 'itemType': CreateDatasetRequestDatasetConfigSearchSourceConfigs },
    };
  }

  validate() {
    if(Array.isArray(this.searchSourceConfigs)) {
      $dara.Model.validateArray(this.searchSourceConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

