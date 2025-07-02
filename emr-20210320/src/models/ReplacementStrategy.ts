// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InstanceCategory } from "./InstanceCategory";


export class ReplacementStrategy extends $dara.Model {
  instanceCategories?: InstanceCategory[];
  static names(): { [key: string]: string } {
    return {
      instanceCategories: 'InstanceCategories',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceCategories: { 'type': 'array', 'itemType': InstanceCategory },
    };
  }

  validate() {
    if(Array.isArray(this.instanceCategories)) {
      $dara.Model.validateArray(this.instanceCategories);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

