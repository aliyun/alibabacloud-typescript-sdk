// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ComponentCapacityConstraint extends $dara.Model {
  componentType?: string;
  maxCapacity?: number;
  minCapacity?: number;
  static names(): { [key: string]: string } {
    return {
      componentType: 'componentType',
      maxCapacity: 'maxCapacity',
      minCapacity: 'minCapacity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentType: 'string',
      maxCapacity: 'number',
      minCapacity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

