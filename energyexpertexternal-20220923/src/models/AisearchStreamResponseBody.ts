// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AISearchStreamItem } from "./AisearchStreamItem";


export class AISearchStreamResponseBody extends $dara.Model {
  data?: AISearchStreamItem;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3F21E33A-42F8-50BC-89DE-DC0B96B967DD
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
      data: AISearchStreamItem,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

