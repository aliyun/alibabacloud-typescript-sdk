// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCustomViewsResponseBodyCustomViewsCustomView } from "./ListCustomViewsResponseBodyCustomViewsCustomView";


export class ListCustomViewsResponseBodyCustomViews extends $dara.Model {
  customView?: ListCustomViewsResponseBodyCustomViewsCustomView[];
  static names(): { [key: string]: string } {
    return {
      customView: 'CustomView',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customView: { 'type': 'array', 'itemType': ListCustomViewsResponseBodyCustomViewsCustomView },
    };
  }

  validate() {
    if(Array.isArray(this.customView)) {
      $dara.Model.validateArray(this.customView);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

