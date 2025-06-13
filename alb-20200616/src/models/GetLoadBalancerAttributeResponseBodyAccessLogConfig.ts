// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLoadBalancerAttributeResponseBodyAccessLogConfig extends $dara.Model {
  /**
   * @remarks
   * The Log Service project.
   * 
   * @example
   * sls-setter
   */
  logProject?: string;
  /**
   * @remarks
   * The Logstore.
   * 
   * @example
   * test
   */
  logStore?: string;
  static names(): { [key: string]: string } {
    return {
      logProject: 'LogProject',
      logStore: 'LogStore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logProject: 'string',
      logStore: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

