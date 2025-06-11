// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTenantSecurityConfigsResponseBodyConfigs } from "./DescribeTenantSecurityConfigsResponseBodyConfigs";


export class DescribeTenantSecurityConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of parameters.
   */
  configs?: DescribeTenantSecurityConfigsResponseBodyConfigs;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 523E7183-****-590D-****-12DFD316614B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: DescribeTenantSecurityConfigsResponseBodyConfigs,
      requestId: 'string',
    };
  }

  validate() {
    if(this.configs && typeof (this.configs as any).validate === 'function') {
      (this.configs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

