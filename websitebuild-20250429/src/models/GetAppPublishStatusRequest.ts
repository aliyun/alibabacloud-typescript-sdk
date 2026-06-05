// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAppPublishStatusRequest extends $dara.Model {
  /**
   * @example
   * WS20250731233102000001
   */
  bizId?: string;
  /**
   * @example
   * 4998717
   */
  deployOrderId?: number;
  /**
   * @example
   * www.aliyun.com
   */
  websiteDomain?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      deployOrderId: 'DeployOrderId',
      websiteDomain: 'WebsiteDomain',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      deployOrderId: 'number',
      websiteDomain: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

