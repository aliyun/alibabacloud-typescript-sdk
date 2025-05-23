// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDeploymentPackagesResponseBodyData } from "./ListDeploymentPackagesResponseBodyData";


export class ListDeploymentPackagesResponseBody extends $dara.Model {
  data?: ListDeploymentPackagesResponseBodyData;
  /**
   * @example
   * 952795279527ab****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDeploymentPackagesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

