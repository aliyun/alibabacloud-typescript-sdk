// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CommitFileRequestOptionAppProperties extends $dara.Model {
  /**
   * @example
   * property_name
   */
  name?: string;
  /**
   * @example
   * property_value
   */
  value?: string;
  /**
   * @example
   * PUBLIC
   */
  visibility?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
      visibility: 'Visibility',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: 'string',
      visibility: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitFileRequestOption extends $dara.Model {
  appProperties?: CommitFileRequestOptionAppProperties[];
  /**
   * @example
   * AUTO_RENAME
   */
  conflictStrategy?: string;
  /**
   * @example
   * false
   */
  convertToOnlineDoc?: boolean;
  /**
   * @example
   * DOC
   */
  convertToOnlineDocTargetDocumentType?: string;
  /**
   * @example
   * 512
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      appProperties: 'AppProperties',
      conflictStrategy: 'ConflictStrategy',
      convertToOnlineDoc: 'ConvertToOnlineDoc',
      convertToOnlineDocTargetDocumentType: 'ConvertToOnlineDocTargetDocumentType',
      size: 'Size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appProperties: { 'type': 'array', 'itemType': CommitFileRequestOptionAppProperties },
      conflictStrategy: 'string',
      convertToOnlineDoc: 'boolean',
      convertToOnlineDocTargetDocumentType: 'string',
      size: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.appProperties)) {
      $dara.Model.validateArray(this.appProperties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CommitFileRequestTenantContext extends $dara.Model {
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

