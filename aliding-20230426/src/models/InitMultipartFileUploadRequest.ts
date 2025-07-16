// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitMultipartFileUploadRequestOptionPreCheckParam extends $dara.Model {
  /**
   * @example
   * md5
   */
  md5?: string;
  /**
   * @example
   * name
   */
  name?: string;
  /**
   * @example
   * 0
   */
  parentId?: string;
  /**
   * @example
   * 100
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      md5: 'Md5',
      name: 'Name',
      parentId: 'ParentId',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      md5: 'string',
      name: 'string',
      parentId: 'string',
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

export class InitMultipartFileUploadRequestOption extends $dara.Model {
  preCheckParam?: InitMultipartFileUploadRequestOptionPreCheckParam;
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
      preferRegion: 'PreferRegion',
      storageDriver: 'StorageDriver',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preCheckParam: InitMultipartFileUploadRequestOptionPreCheckParam,
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

export class InitMultipartFileUploadRequestTenantContext extends $dara.Model {
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

