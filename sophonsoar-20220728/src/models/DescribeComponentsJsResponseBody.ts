// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeComponentsJsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration of the JavaScript file for the component.
   * 
   * @example
   * [
   *     {
   *         "js": "https://xxxxx.oss-cn-zhangjiakou.aliyuncs.com/componentUpload/xxxxx",
   *         "name": "python3",
   *         "ownType": "sys"
   *     }
   * ]
   */
  componentsJs?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 58A518BC-E4A8-5BD7-AFEA-366046ED9073
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      componentsJs: 'ComponentsJs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentsJs: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

