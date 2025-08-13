// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApisRequest extends $dara.Model {
  /**
   * @remarks
   * Set the language type for requests and received messages, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * API group ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 3309b0f4b1e243cd8bd9dd029f9c5f0a
   */
  apiGroupId?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou、cn-shanghai
   */
  apiRegionId?: string;
  /**
   * @remarks
   * API type.
   * 
   * This parameter is required.
   * 
   * @example
   * SELF
   */
  apiType?: string;
  /**
   * @remarks
   * Region code.
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

