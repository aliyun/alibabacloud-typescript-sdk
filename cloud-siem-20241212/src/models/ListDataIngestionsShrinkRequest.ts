// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataIngestionsShrinkRequest extends $dara.Model {
  dataIngestionIdsShrink?: string;
  /**
   * @example
   * enabled。
   */
  dataIngestionStatus?: string;
  dataIngestionTemplateIdsShrink?: string;
  /**
   * @example
   * zh。
   */
  lang?: string;
  /**
   * @example
   * alibaba_cloud_sas。
   */
  productId?: string;
  /**
   * @example
   * cn-hangzhou。
   */
  regionId?: string;
  /**
   * @example
   * 173326*******。
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      dataIngestionIdsShrink: 'DataIngestionIds',
      dataIngestionStatus: 'DataIngestionStatus',
      dataIngestionTemplateIdsShrink: 'DataIngestionTemplateIds',
      lang: 'Lang',
      productId: 'ProductId',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataIngestionIdsShrink: 'string',
      dataIngestionStatus: 'string',
      dataIngestionTemplateIdsShrink: 'string',
      lang: 'string',
      productId: 'string',
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

