// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDataSourceRequest extends $dara.Model {
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
   * The description.
   * 
   * @example
   * 描述
   */
  description?: string;
  /**
   * @remarks
   * The primary key ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  id?: number;
  /**
   * @remarks
   * The data source name.
   * 
   * @example
   * 年龄数据源
   */
  name?: string;
  /**
   * @remarks
   * The OSS file key.
   * 
   * @example
   * saf/path/xxx
   */
  ossKey?: string;
  /**
   * @remarks
   * The region code.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The data source type.
   * 
   * @example
   * FILE
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      description: 'description',
      id: 'id',
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
      id: 'number',
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

