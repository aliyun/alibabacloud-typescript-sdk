// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListExecutorsResponseBodyExecutorsResourceDisks } from "./ListExecutorsResponseBodyExecutorsResourceDisks";


export class ListExecutorsResponseBodyExecutorsResource extends $dara.Model {
  cores?: number;
  disks?: ListExecutorsResponseBodyExecutorsResourceDisks[];
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      disks: 'Disks',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      disks: { 'type': 'array', 'itemType': ListExecutorsResponseBodyExecutorsResourceDisks },
      memory: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.disks)) {
      $dara.Model.validateArray(this.disks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

