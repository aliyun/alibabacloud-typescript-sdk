// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePGHbaConfigResponseBodyDefaultHbaItemsHbaItem } from "./DescribePghbaConfigResponseBodyDefaultHbaItemsHbaItem";


export class DescribePGHbaConfigResponseBodyDefaultHbaItems extends $dara.Model {
  hbaItem?: DescribePGHbaConfigResponseBodyDefaultHbaItemsHbaItem[];
  static names(): { [key: string]: string } {
    return {
      hbaItem: 'HbaItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hbaItem: { 'type': 'array', 'itemType': DescribePGHbaConfigResponseBodyDefaultHbaItemsHbaItem },
    };
  }

  validate() {
    if(Array.isArray(this.hbaItem)) {
      $dara.Model.validateArray(this.hbaItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

