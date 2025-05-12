// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListAgentsResponseBodyDataVersions } from "./ListAgentsResponseBodyDataVersions";


export class ListAgentsResponseBodyData extends $dara.Model {
  createdAt?: string;
  description?: string;
  id?: string;
  /**
   * @example
   * SysOM Agent
   */
  name?: string;
  /**
   * @example
   * x86
   */
  supportArch?: string;
  /**
   * @example
   * Control
   */
  type?: string;
  updatedAt?: string;
  versions?: ListAgentsResponseBodyDataVersions[];
  static names(): { [key: string]: string } {
    return {
      createdAt: 'created_at',
      description: 'description',
      id: 'id',
      name: 'name',
      supportArch: 'support_arch',
      type: 'type',
      updatedAt: 'updated_at',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'string',
      description: 'string',
      id: 'string',
      name: 'string',
      supportArch: 'string',
      type: 'string',
      updatedAt: 'string',
      versions: { 'type': 'array', 'itemType': ListAgentsResponseBodyDataVersions },
    };
  }

  validate() {
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

