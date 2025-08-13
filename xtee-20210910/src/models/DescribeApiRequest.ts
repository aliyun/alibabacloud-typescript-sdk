// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiRequest extends $dara.Model {
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
   * API unique ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 33
   */
  apiId?: string;
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
   * API type
   * 
   * This parameter is required.
   * 
   * @example
   * SELF
   */
  apiType?: string;
  /**
   * @remarks
   * Region code
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      apiId: 'apiId',
      apiRegionId: 'apiRegionId',
      apiType: 'apiType',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      apiId: 'string',
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

