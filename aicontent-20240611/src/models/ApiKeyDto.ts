// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ClientDTO } from "./ClientDto";


export class ApiKeyDTO extends $dara.Model {
  client?: ClientDTO;
  /**
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtModified?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * sk-xxx****xxx
   */
  keyPreview?: string;
  /**
   * @example
   * MyApiKey
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      client: 'client',
      clientId: 'clientId',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      keyPreview: 'keyPreview',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      client: ClientDTO,
      clientId: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      keyPreview: 'string',
      name: 'string',
    };
  }

  validate() {
    if(this.client && typeof (this.client as any).validate === 'function') {
      (this.client as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

