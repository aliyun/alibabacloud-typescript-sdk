// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MultiModalGuardAsyncRequest extends $dara.Model {
  /**
   * @example
   * baselineCheck
   */
  service?: string;
  /**
   * @example
   * {"url": "https://talesofai.oss-cn-shanghai.aliyuncs.com/xxx.mp4", "dataId": "data1234"}
   */
  serviceParameters?: string;
  static names(): { [key: string]: string } {
    return {
      service: 'Service',
      serviceParameters: 'ServiceParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      service: 'string',
      serviceParameters: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

