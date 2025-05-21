// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { HttpApiApiInfo } from "./HttpApiApiInfo";


export class ParentResourceInfo extends $dara.Model {
  apiInfo?: HttpApiApiInfo;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      apiInfo: 'apiInfo',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiInfo: HttpApiApiInfo,
      resourceType: 'string',
    };
  }

  validate() {
    if(this.apiInfo && typeof (this.apiInfo as any).validate === 'function') {
      (this.apiInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

