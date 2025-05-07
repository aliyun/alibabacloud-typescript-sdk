// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateDatasetRequestDatasetConfigSearchSourceConfigs } from "./UpdateDatasetRequestDatasetConfigSearchSourceConfigs";


export class UpdateDatasetRequestDatasetConfig extends $dara.Model {
  searchSourceConfigs?: UpdateDatasetRequestDatasetConfigSearchSourceConfigs[];
  static names(): { [key: string]: string } {
    return {
      searchSourceConfigs: 'SearchSourceConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchSourceConfigs: { 'type': 'array', 'itemType': UpdateDatasetRequestDatasetConfigSearchSourceConfigs },
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

