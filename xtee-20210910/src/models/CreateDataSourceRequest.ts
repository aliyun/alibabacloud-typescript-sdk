// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataSourceRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Data source description.
   * 
   * @example
   * 数据源描述
   */
  description?: string;
  /**
   * @remarks
   * Data source name.
   * 
   * This parameter is required.
   * 
   * @example
   * testDispatch
   */
  name?: string;
  /**
   * @remarks
   * OSS file key.
   * 
   * This parameter is required.
   * 
   * @example
   * oss上传key
   */
  ossKey?: string;
  /**
   * @remarks
   * Region code
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * Data source type
   * 
   * This parameter is required.
   * 
   * @example
   * FILE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      description: 'description',
      name: 'name',
      ossKey: 'ossKey',
      regId: 'regId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      description: 'string',
      name: 'string',
      ossKey: 'string',
      regId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

