// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ClientDTO } from "./ClientDto";


export class ApiKeyDecryptedDTO extends $dara.Model {
  /**
   * @remarks
   * The associated client information.
   */
  client?: ClientDTO;
  /**
   * @remarks
   * The client ID.
   * 
   * @example
   * 1
   */
  clientId?: number;
  /**
   * @remarks
   * The deletion tag. A value of 0 indicates enabled, and a non-zero value indicates disabled.
   * 
   * @example
   * 0
   */
  deleteTag?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2024-01-01T00:00:00Z
   */
  gmtModified?: string;
  /**
   * @remarks
   * ID
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The full key.
   * 
   * @example
   * sk-xxxxxxxxxxxxxxxxxxx
   */
  key?: string;
  /**
   * @remarks
   * The key preview.
   * 
   * @example
   * sk-xxx****xxx
   */
  keyPreview?: string;
  /**
   * @remarks
   * The key name.
   * 
   * @example
   * MyApiKey
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      client: 'client',
      clientId: 'clientId',
      deleteTag: 'deleteTag',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      key: 'key',
      keyPreview: 'keyPreview',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      client: ClientDTO,
      clientId: 'number',
      deleteTag: 'number',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      key: 'string',
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

