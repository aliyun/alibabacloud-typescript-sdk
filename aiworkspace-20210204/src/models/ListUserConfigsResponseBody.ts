// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUserConfigsResponseBodyConfigs } from "./ListUserConfigsResponseBodyConfigs";


export class ListUserConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configurations list.
   */
  configs?: ListUserConfigsResponseBodyConfigs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * sdjksdk-******-dsfds
   */
  requestId?: string;
  /**
   * @remarks
   * The number of items returned.
   * 
   * @example
   * 15
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: { 'type': 'array', 'itemType': ListUserConfigsResponseBodyConfigs },
      requestId: 'string',
      totalCount: 'number',
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

