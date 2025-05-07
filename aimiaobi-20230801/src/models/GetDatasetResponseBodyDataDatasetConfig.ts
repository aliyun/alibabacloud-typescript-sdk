// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigs } from "./GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigs";


export class GetDatasetResponseBodyDataDatasetConfig extends $dara.Model {
  searchSourceConfigs?: GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigs[];
  static names(): { [key: string]: string } {
    return {
      searchSourceConfigs: 'SearchSourceConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      searchSourceConfigs: { 'type': 'array', 'itemType': GetDatasetResponseBodyDataDatasetConfigSearchSourceConfigs },
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

