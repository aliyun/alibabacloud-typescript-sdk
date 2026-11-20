// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModelGroupClientKeyItemDTO } from "./ModelGroupClientKeyItemDto";


export class ModelGroupClientDTO extends $dara.Model {
  /**
   * @remarks
   * The list of API key summaries for the department.
   * 
   * @example
   * []
   */
  apiKeys?: ModelGroupClientKeyItemDTO[];
  /**
   * @remarks
   * The department ID.
   * 
   * @example
   * 1001
   */
  clientId?: number;
  /**
   * @remarks
   * The department name.
   * 
   * @example
   * User A-Professional Edition
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

