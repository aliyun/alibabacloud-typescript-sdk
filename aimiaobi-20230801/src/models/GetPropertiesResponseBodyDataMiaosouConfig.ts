// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetPropertiesResponseBodyDataMiaosouConfigModelInfos } from "./GetPropertiesResponseBodyDataMiaosouConfigModelInfos";


export class GetPropertiesResponseBodyDataMiaosouConfig extends $dara.Model {
  /**
   * @example
   * 1
   */
  maxDocSize?: number;
  modelInfos?: GetPropertiesResponseBodyDataMiaosouConfigModelInfos[];
  /**
   * @example
   * 1
   */
  useDocSize?: number;
  static names(): { [key: string]: string } {
    return {
      maxDocSize: 'MaxDocSize',
      modelInfos: 'ModelInfos',
      useDocSize: 'UseDocSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxDocSize: 'number',
      modelInfos: { 'type': 'array', 'itemType': GetPropertiesResponseBodyDataMiaosouConfigModelInfos },
      useDocSize: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.modelInfos)) {
      $dara.Model.validateArray(this.modelInfos);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

