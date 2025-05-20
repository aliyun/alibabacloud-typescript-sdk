// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CssInstanceProperty } from "./CssInstanceProperty";


export class CssInstanceComponent extends $dara.Model {
  componentCode?: string;
  componentName?: string;
  globalKey?: string;
  instanceProperty?: CssInstanceProperty[];
  moduleAttrStatus?: number;
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      componentCode: 'componentCode',
      componentName: 'componentName',
      globalKey: 'globalKey',
      instanceProperty: 'instanceProperty',
      moduleAttrStatus: 'moduleAttrStatus',
      tag: 'tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentCode: 'string',
      componentName: 'string',
      globalKey: 'string',
      instanceProperty: { 'type': 'array', 'itemType': CssInstanceProperty },
      moduleAttrStatus: 'number',
      tag: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.instanceProperty)) {
      $dara.Model.validateArray(this.instanceProperty);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

