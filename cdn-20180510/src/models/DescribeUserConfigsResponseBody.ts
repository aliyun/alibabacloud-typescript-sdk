// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUserConfigsResponseBodyConfigsOssLogConfig extends $dara.Model {
  /**
   * @remarks
   * The name of the bucket.
   * 
   * @example
   * Buckettest
   */
  bucket?: string;
  /**
   * @remarks
   * Indicates whether the OSS bucket is enabled.
   * 
   * @example
   * off
   */
  enable?: string;
  /**
   * @remarks
   * The prefix.
   * 
   * @example
   * test
   */
  prefix?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      enable: 'Enable',
      prefix: 'Prefix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      enable: 'string',
      prefix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeUserConfigsResponseBodyConfigsWafConfig extends $dara.Model {
  /**
   * @remarks
   * Indicates whether WAF is enabled.
   * 
   * @example
   * on
   */
  enable?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

export class DescribeUserConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configurations of the specified feature.
   */
  configs?: DescribeUserConfigsResponseBodyConfigs;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9BCC7BAA-ACBE-45E5-83F0-98BF7E693E84
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: DescribeUserConfigsResponseBodyConfigs,
      requestId: 'string',
    };
  }

  validate() {
    if(this.configs && typeof (this.configs as any).validate === 'function') {
      (this.configs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

