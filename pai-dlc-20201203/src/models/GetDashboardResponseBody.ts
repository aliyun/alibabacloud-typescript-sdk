// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDashboardResponseBody extends $dara.Model {
  /**
   * @example
   * https://dlcj1jzm1p01saqw-spark.pre-dsw-gateway-cn-hangzhou.data.aliyun.com
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      url: 'url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

