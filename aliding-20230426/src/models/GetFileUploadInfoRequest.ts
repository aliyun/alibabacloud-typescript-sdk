// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileUploadInfoRequestOptionPreCheckParam extends $dara.Model {
  /**
   * @example
   * None
   */
  name?: string;
  /**
   * @example
   * None
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileUploadInfoRequestOption extends $dara.Model {
  preCheckParam?: GetFileUploadInfoRequestOptionPreCheckParam;
  /**
   * @example
   * true
   */
  preferIntranet?: boolean;
  /**
   * @example
   * ZHANGJIAKOU
   */
  preferRegion?: string;
  /**
   * @example
   * DINGTALK
   */
  storageDriver?: string;
  static names(): { [key: string]: string } {
    return {
      preCheckParam: 'PreCheckParam',
      preferIntranet: 'PreferIntranet',
      preferRegion: 'PreferRegion',
      storageDriver: 'StorageDriver',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preCheckParam: GetFileUploadInfoRequestOptionPreCheckParam,
      preferIntranet: 'boolean',
      preferRegion: 'string',
      storageDriver: 'string',
    };
  }

  validate() {
    if(this.preCheckParam && typeof (this.preCheckParam as any).validate === 'function') {
      (this.preCheckParam as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileUploadInfoRequestTenantContext extends $dara.Model {
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

export class GetFileUploadInfoRequest extends $dara.Model {
  option?: GetFileUploadInfoRequestOption;
  /**
   * @example
   * dentryUuid
   */
  parentDentryUuid?: string;
  /**
   * @example
   * HEADER_SIGNATURE
   */
  protocol?: string;
  tenantContext?: GetFileUploadInfoRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      option: 'Option',
      parentDentryUuid: 'ParentDentryUuid',
      protocol: 'Protocol',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      option: GetFileUploadInfoRequestOption,
      parentDentryUuid: 'string',
      protocol: 'string',
      tenantContext: GetFileUploadInfoRequestTenantContext,
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

