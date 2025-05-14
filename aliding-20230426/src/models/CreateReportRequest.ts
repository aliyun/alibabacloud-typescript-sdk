// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateReportRequestContents } from "./CreateReportRequestContents";
import { CreateReportRequestTenantContext } from "./CreateReportRequestTenantContext";


export class CreateReportRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * []
   */
  contents?: CreateReportRequestContents[];
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
  tenantContext?: CreateReportRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  toChat?: boolean;
  /**
   * @example
   * []
   */
  toCids?: string[];
  /**
   * @example
   * [123,456]
   */
  toUserids?: string[];
  static names(): { [key: string]: string } {
    return {
      contents: 'Contents',
      ddFrom: 'DdFrom',
      templateId: 'TemplateId',
      tenantContext: 'TenantContext',
      toChat: 'ToChat',
      toCids: 'ToCids',
      toUserids: 'ToUserids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': CreateReportRequestContents },
      ddFrom: 'string',
      templateId: 'string',
      tenantContext: CreateReportRequestTenantContext,
      toChat: 'boolean',
      toCids: { 'type': 'array', 'itemType': 'string' },
      toUserids: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
    }
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    if(Array.isArray(this.toCids)) {
      $dara.Model.validateArray(this.toCids);
    }
    if(Array.isArray(this.toUserids)) {
      $dara.Model.validateArray(this.toUserids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

