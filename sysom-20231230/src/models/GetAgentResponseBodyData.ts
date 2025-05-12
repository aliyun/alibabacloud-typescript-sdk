// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAgentResponseBodyDataVersions } from "./GetAgentResponseBodyDataVersions";


export class GetAgentResponseBodyData extends $dara.Model {
  createdAt?: string;
  description?: string;
  id?: string;
  name?: string;
  supportArch?: string;
  type?: string;
  updatedAt?: string;
  versions?: GetAgentResponseBodyDataVersions[];
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
      versions: { 'type': 'array', 'itemType': GetAgentResponseBodyDataVersions },
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

