// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CommitFileRequestOption } from "./CommitFileRequestOption";
import { CommitFileRequestTenantContext } from "./CommitFileRequestTenantContext";


export class CommitFileRequest extends $dara.Model {
  /**
   * @example
   * None
   */
  name?: string;
  option?: CommitFileRequestOption;
  /**
   * @example
   * dentryUuid
   */
  parentDentryUuid?: string;
  tenantContext?: CommitFileRequestTenantContext;
  /**
   * @example
   * upload_key
   */
  uploadKey?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      option: 'Option',
      parentDentryUuid: 'ParentDentryUuid',
      tenantContext: 'TenantContext',
      uploadKey: 'UploadKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      option: CommitFileRequestOption,
      parentDentryUuid: 'string',
      tenantContext: CommitFileRequestTenantContext,
      uploadKey: 'string',
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

