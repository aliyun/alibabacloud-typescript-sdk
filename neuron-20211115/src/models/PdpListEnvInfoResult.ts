// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EnvInfoDO } from "./EnvInfoDo";


export class PdpListEnvInfoResult extends $dara.Model {
  data?: EnvInfoDO[];
  /**
   * @example
   * 121
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': EnvInfoDO },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

