// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The API group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3309b0f4b1e243cd8bd9dd029f9c5f0a
   */
  apiGroupId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou、cn-shanghai
   */
  apiRegionId?: string;
  /**
   * @remarks
   * The API type.
   * 
   * This parameter is required.
   * 
   * @example
   * SELF
   */
  apiType?: string;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      apiGroupId: 'apiGroupId',
      apiRegionId: 'apiRegionId',
      apiType: 'apiType',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      apiGroupId: 'string',
      apiRegionId: 'string',
      apiType: 'string',
      regId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

