// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePictureSearchAppRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the image search application instance.
   * 
   * The description can contain Chinese characters, uppercase and lowercase English letters, digits, underscores (_), and hyphens (-). It can be up to 1,024 characters in length, and each Chinese character counts as two characters.
   * 
   * This parameter is required.
   * 
   * @example
   * ImageSearchDemo
   */
  desc?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * You can view the **ID** of the current instance on the **Instance Overview** page in the IoT Platform console. If the instance has an ID, you must specify this ID. Otherwise, the call fails.
   * 
   * > If the public instance does not have an ID, see [How to obtain an instance ID](https://help.aliyun.com/document_detail/267533.html).
   * 
   * @example
   * iot_instc_pu****_c*-v64********
   */
  iotInstanceId?: string;
  /**
   * @remarks
   * The name of the image search application instance. 
   * 
   * The name can contain Chinese characters, uppercase and lowercase English letters, digits, underscores (_), and hyphens (-). It can be up to 64 characters in length, and each Chinese character counts as two characters.
   * 
   * This parameter is required.
   * 
   * @example
   * ImageSearch
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      desc: 'Desc',
      iotInstanceId: 'IotInstanceId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desc: 'string',
      iotInstanceId: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

