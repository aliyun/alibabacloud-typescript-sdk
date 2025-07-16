// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveContentRequestContents extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ### 序号1
   */
  content?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * markdown
   */
  contentType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 今日完成工作
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  sort?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  type?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      contentType: 'ContentType',
      key: 'Key',
      sort: 'Sort',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      contentType: 'string',
      key: 'string',
      sort: 'number',
      type: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SaveContentRequestTenantContext extends $dara.Model {
  /**
   * @example
   * 1
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

export class SaveContentRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * []
   */
  contents?: SaveContentRequestContents[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * client
   */
  ddFrom?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * sdfafdsfsafdfsaf
   */
  templateId?: string;
  tenantContext?: SaveContentRequestTenantContext;
  static names(): { [key: string]: string } {
    return {
      contents: 'Contents',
      ddFrom: 'DdFrom',
      templateId: 'TemplateId',
      tenantContext: 'TenantContext',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': SaveContentRequestContents },
      ddFrom: 'string',
      templateId: 'string',
      tenantContext: SaveContentRequestTenantContext,
    };
  }

  validate() {
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
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

