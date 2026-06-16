// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The unique ID of the API.
   * 
   * This parameter is required.
   * 
   * @example
   * 33
   */
  apiId?: string;
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
   * The area code.
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

