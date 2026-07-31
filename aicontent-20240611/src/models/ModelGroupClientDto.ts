// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelGroupClientKeyItemDTO } from "./ModelGroupClientKeyItemDto";


export class ModelGroupClientDTO extends $dara.Model {
  /**
   * @example
   * []
   */
  apiKeys?: ModelGroupClientKeyItemDTO[];
  /**
   * @example
   * 1001
   */
  clientId?: number;
  /**
   * @example
   * UserA-Professional
   */
  clientName?: string;
  static names(): { [key: string]: string } {
    return {
      apiKeys: 'apiKeys',
      clientId: 'clientId',
      clientName: 'clientName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKeys: { 'type': 'array', 'itemType': ModelGroupClientKeyItemDTO },
      clientId: 'number',
      clientName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.apiKeys)) {
      $dara.Model.validateArray(this.apiKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

