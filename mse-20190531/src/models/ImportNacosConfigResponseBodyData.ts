// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImportNacosConfigResponseBodyDataFailData } from "./ImportNacosConfigResponseBodyDataFailData";
import { ImportNacosConfigResponseBodyDataSkipData } from "./ImportNacosConfigResponseBodyDataSkipData";


export class ImportNacosConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The data structure.
   */
  failData?: ImportNacosConfigResponseBodyDataFailData[];
  /**
   * @remarks
   * The information about skipped configurations.
   * 
   * @example
   * 10
   */
  skipCount?: number;
  /**
   * @remarks
   * The data structure.
   */
  skipData?: ImportNacosConfigResponseBodyDataSkipData[];
  /**
   * @remarks
   * The number of configurations that are skipped.
   * 
   * @example
   * 100
   */
  succCount?: number;
  static names(): { [key: string]: string } {
    return {
      failData: 'FailData',
      skipCount: 'SkipCount',
      skipData: 'SkipData',
      succCount: 'SuccCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failData: { 'type': 'array', 'itemType': ImportNacosConfigResponseBodyDataFailData },
      skipCount: 'number',
      skipData: { 'type': 'array', 'itemType': ImportNacosConfigResponseBodyDataSkipData },
      succCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.failData)) {
      $dara.Model.validateArray(this.failData);
    }
    if(Array.isArray(this.skipData)) {
      $dara.Model.validateArray(this.skipData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

