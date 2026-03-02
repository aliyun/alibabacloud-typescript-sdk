// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PdpSlsLogInfo extends $dara.Model {
  /**
   * @example
   * https://sls.console.aliyun.com/lognext/project/k8s-log-c42539518786e49fbb390929599dec9fa/logsearch/yunmall-customer112production
   */
  slsUrl?: string;
  static names(): { [key: string]: string } {
    return {
      slsUrl: 'slsUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      slsUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

