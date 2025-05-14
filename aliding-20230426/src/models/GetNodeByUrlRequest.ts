// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetNodeByUrlRequestOption } from "./GetNodeByUrlRequestOption";
import { GetNodeByUrlRequestTenantContext } from "./GetNodeByUrlRequestTenantContext";


export class GetNodeByUrlRequest extends $dara.Model {
  option?: GetNodeByUrlRequestOption;
  tenantContext?: GetNodeByUrlRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://alidocs.dingtalk.com/i/nodes/EpGBa2L*********gN7R35y
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      option: 'Option',
      tenantContext: 'TenantContext',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      option: GetNodeByUrlRequestOption,
      tenantContext: GetNodeByUrlRequestTenantContext,
      url: 'string',
    };
  }

  validate() {
    if(this.option && typeof (this.option as any).validate === 'function') {
      (this.option as any).validate();
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

