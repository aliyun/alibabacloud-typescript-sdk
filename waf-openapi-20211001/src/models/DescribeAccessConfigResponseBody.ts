// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAccessConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The value of the queried configuration item. For more information, see the **ConfigValue** parameter in [ModifyAccessConfig](~~ModifyAccessConfig~~).
   * 
   * @example
   * {"status":1,"products":["alb"]}
   */
  configValue?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7861F61-5B61-46CE-A47C-6B19160D5EB0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configValue: 'ConfigValue',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configValue: 'string',
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

