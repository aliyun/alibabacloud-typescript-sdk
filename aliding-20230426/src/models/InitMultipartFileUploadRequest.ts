// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InitMultipartFileUploadRequestOption } from "./InitMultipartFileUploadRequestOption";
import { InitMultipartFileUploadRequestTenantContext } from "./InitMultipartFileUploadRequestTenantContext";


export class InitMultipartFileUploadRequest extends $dara.Model {
  option?: InitMultipartFileUploadRequestOption;
  /**
   * @example
   * dentryUuid
   */
  parentDentryUuid?: string;
  tenantContext?: InitMultipartFileUploadRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      option: 'Option',
      parentDentryUuid: 'ParentDentryUuid',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      option: InitMultipartFileUploadRequestOption,
      parentDentryUuid: 'string',
      tenantContext: InitMultipartFileUploadRequestTenantContext,
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

