// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResourceSpec } from "./ResourceSpec";


export class Resource extends $dara.Model {
  elasticResource?: ResourceSpec;
  /**
   * @remarks
   * This parameter is required.
   */
  fixedResource?: ResourceSpec;
  static names(): { [key: string]: string } {
    return {
      elasticResource: 'elasticResource',
      fixedResource: 'fixedResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticResource: ResourceSpec,
      fixedResource: ResourceSpec,
    };
  }

  validate() {
    if(this.elasticResource && typeof (this.elasticResource as any).validate === 'function') {
      (this.elasticResource as any).validate();
    }
    if(this.fixedResource && typeof (this.fixedResource as any).validate === 'function') {
      (this.fixedResource as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

