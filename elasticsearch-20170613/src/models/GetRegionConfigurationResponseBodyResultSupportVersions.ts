// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRegionConfigurationResponseBodyResultSupportVersionsSupportVersionList } from "./GetRegionConfigurationResponseBodyResultSupportVersionsSupportVersionList";


export class GetRegionConfigurationResponseBodyResultSupportVersions extends $dara.Model {
  /**
   * @example
   * x-pack
   */
  instanceCategory?: string;
  supportVersionList?: GetRegionConfigurationResponseBodyResultSupportVersionsSupportVersionList[];
  static names(): { [key: string]: string } {
    return {
      instanceCategory: 'instanceCategory',
      supportVersionList: 'supportVersionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCategory: 'string',
      supportVersionList: { 'type': 'array', 'itemType': GetRegionConfigurationResponseBodyResultSupportVersionsSupportVersionList },
    };
  }

  validate() {
    if(Array.isArray(this.supportVersionList)) {
      $dara.Model.validateArray(this.supportVersionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

