// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateLiveShrinkRequest extends $dara.Model {
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
   * 4d38xxxxx
   */
  liveId?: string;
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
  tenantContextShrink?: string;
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
      liveId: 'LiveId',
      preEndTime: 'PreEndTime',
      preStartTime: 'PreStartTime',
      tenantContextShrink: 'TenantContext',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      introduction: 'string',
      liveId: 'string',
      preEndTime: 'number',
      preStartTime: 'number',
      tenantContextShrink: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

