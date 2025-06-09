// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetLogsV2ResponseBodyMeta } from "./GetLogsV2responseBodyMeta";


export class GetLogsV2ResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: { [key: string]: string }[];
  /**
   * @remarks
   * The metadata of the returned data.
   */
  meta?: GetLogsV2ResponseBodyMeta;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      meta: 'meta',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'string' } },
      meta: GetLogsV2ResponseBodyMeta,
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.meta && typeof (this.meta as any).validate === 'function') {
      (this.meta as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

