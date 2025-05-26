// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Hyperparameters } from "./Hyperparameters";
import { Resource } from "./Resource";


export class Runtime extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  hyperparameters?: Hyperparameters;
  /**
   * @remarks
   * This parameter is required.
   */
  resource?: Resource;
  static names(): { [key: string]: string } {
    return {
      hyperparameters: 'Hyperparameters',
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hyperparameters: Hyperparameters,
      resource: Resource,
    };
  }

  validate() {
    if(this.hyperparameters && typeof (this.hyperparameters as any).validate === 'function') {
      (this.hyperparameters as any).validate();
    }
    if(this.resource && typeof (this.resource as any).validate === 'function') {
      (this.resource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

