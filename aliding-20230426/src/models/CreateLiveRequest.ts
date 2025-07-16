// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLiveRequestTenantContext extends $dara.Model {
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

export class CreateLiveRequest extends $dara.Model {
  /**
   * @example
   * http://sss/sss
   */
  coverUrl?: string;
  /**
   * @example
   * 这是一个直播
   */
  introduction?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1698596800000
   */
  preEndTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1691596800000
   */
  preStartTime?: number;
  /**
   * @example
   * 0
   */
  publicType?: number;
  tenantContext?: CreateLiveRequestTenantContext;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 标题
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      introduction: 'Introduction',
      preEndTime: 'PreEndTime',
      preStartTime: 'PreStartTime',
      publicType: 'PublicType',
      tenantContext: 'TenantContext',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      introduction: 'string',
      preEndTime: 'number',
      preStartTime: 'number',
      publicType: 'number',
      tenantContext: CreateLiveRequestTenantContext,
      title: 'string',
    };
  }

  validate() {
    if(this.tenantContext && typeof (this.tenantContext as any).validate === 'function') {
      (this.tenantContext as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

