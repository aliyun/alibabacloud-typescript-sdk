// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { MetaData } from "./MetaData";
import { Spec } from "./Spec";


export class ModelSpecification extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  metaData?: MetaData;
  /**
   * @remarks
   * This parameter is required.
   */
  spec?: Spec;
  static names(): { [key: string]: string } {
    return {
      metaData: 'MetaData',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      metaData: MetaData,
      spec: Spec,
    };
  }

  validate() {
    if(this.metaData && typeof (this.metaData as any).validate === 'function') {
      (this.metaData as any).validate();
    }
    if(this.spec && typeof (this.spec as any).validate === 'function') {
      (this.spec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

