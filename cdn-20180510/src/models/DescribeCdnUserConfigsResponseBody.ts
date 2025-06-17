// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnUserConfigsResponseBodyConfigs } from "./DescribeCdnUserConfigsResponseBodyConfigs";


export class DescribeCdnUserConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The user configurations.
   */
  configs?: DescribeCdnUserConfigsResponseBodyConfigs[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 06D29681-B7CD-4034-A8CC-28AFFA213539
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': DescribeCdnUserConfigsResponseBodyConfigs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.configs)) {
      $dara.Model.validateArray(this.configs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

