// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUserConfigsResponseBodyConfigsOssLogConfig } from "./DescribeUserConfigsResponseBodyConfigsOssLogConfig";
import { DescribeUserConfigsResponseBodyConfigsWafConfig } from "./DescribeUserConfigsResponseBodyConfigsWafConfig";


export class DescribeUserConfigsResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * The configurations of Object Storage Service (OSS).
   */
  ossLogConfig?: DescribeUserConfigsResponseBodyConfigsOssLogConfig;
  /**
   * @remarks
   * The configurations of Web Application Firewall (WAF).
   */
  wafConfig?: DescribeUserConfigsResponseBodyConfigsWafConfig;
  static names(): { [key: string]: string } {
    return {
      ossLogConfig: 'OssLogConfig',
      wafConfig: 'WafConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ossLogConfig: DescribeUserConfigsResponseBodyConfigsOssLogConfig,
      wafConfig: DescribeUserConfigsResponseBodyConfigsWafConfig,
    };
  }

  validate() {
    if(this.ossLogConfig && typeof (this.ossLogConfig as any).validate === 'function') {
      (this.ossLogConfig as any).validate();
    }
    if(this.wafConfig && typeof (this.wafConfig as any).validate === 'function') {
      (this.wafConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

