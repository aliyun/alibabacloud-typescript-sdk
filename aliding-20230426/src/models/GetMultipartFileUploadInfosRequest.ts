// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMultipartFileUploadInfosRequestOption extends $dara.Model {
  /**
   * @example
   * true
   */
  preferIntranet?: boolean;
  static names(): { [key: string]: string } {
    return {
      preferIntranet: 'PreferIntranet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preferIntranet: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultipartFileUploadInfosRequestTenantContext extends $dara.Model {
  /**
   * @example
   * xxxxxx
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMultipartFileUploadInfosRequest extends $dara.Model {
  option?: GetMultipartFileUploadInfosRequestOption;
  partNumbers?: number[];
  tenantContext?: GetMultipartFileUploadInfosRequestTenantContext;
  /**
   * @example
   * hwHPAAAAAipHxxxxx
   */
  uploadKey?: string;
  static names(): { [key: string]: string } {
    return {
      option: 'Option',
      partNumbers: 'PartNumbers',
      tenantContext: 'TenantContext',
      uploadKey: 'UploadKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      option: GetMultipartFileUploadInfosRequestOption,
      partNumbers: { 'type': 'array', 'itemType': 'number' },
      tenantContext: GetMultipartFileUploadInfosRequestTenantContext,
      uploadKey: 'string',
    };
  }

  validate() {
    if(this.option && typeof (this.option as any).validate === 'function') {
      (this.option as any).validate();
    }
    if(Array.isArray(this.partNumbers)) {
      $dara.Model.validateArray(this.partNumbers);
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

