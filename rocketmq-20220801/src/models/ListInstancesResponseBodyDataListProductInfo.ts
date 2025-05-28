// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancesResponseBodyDataListProductInfo extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the message trace feature is enabled. Valid values:
   * 
   * *   true
   * *   false
   * 
   * This parameter is not in use. By default, the message trace feature is enabled for ApsaraMQ for RocketMQ instances, regardless of whether this parameter is configured.
   * 
   * @example
   * true
   */
  traceOn?: boolean;
  static names(): { [key: string]: string } {
    return {
      traceOn: 'traceOn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      traceOn: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

