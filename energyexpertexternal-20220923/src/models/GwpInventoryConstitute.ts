// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GwpResourceConstitute } from "./GwpResourceConstitute";


export class GwpInventoryConstitute extends $dara.Model {
  byResourceType?: GwpResourceConstitute[];
  carbonEmission?: number;
  items?: GwpInventoryConstitute[];
  name?: string;
  percent?: number;
  resourceType?: number;
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      byResourceType: 'byResourceType',
      carbonEmission: 'carbonEmission',
      items: 'items',
      name: 'name',
      percent: 'percent',
      resourceType: 'resourceType',
      unit: 'unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      byResourceType: { 'type': 'array', 'itemType': GwpResourceConstitute },
      carbonEmission: 'number',
      items: { 'type': 'array', 'itemType': GwpInventoryConstitute },
      name: 'string',
      percent: 'number',
      resourceType: 'number',
      unit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.byResourceType)) {
      $dara.Model.validateArray(this.byResourceType);
    }
    if(Array.isArray(this.items)) {
      $dara.Model.validateArray(this.items);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

