// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the Logtail configuration, which is used for fuzzy match.
   * 
   * @example
   * logtail-config-sample
   */
  configName?: string;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * This parameter is required.
   * 
   * @example
   * ali-test-logstore
   */
  logstoreName?: string;
  /**
   * @remarks
   * The line from which the query starts. Default value: 0.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The number of entries per page. Maximum value: 500.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  size?: number;
  static names(): { [key: string]: string } {
    return {
      configName: 'configName',
      logstoreName: 'logstoreName',
      offset: 'offset',
      size: 'size',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configName: 'string',
      logstoreName: 'string',
      offset: 'number',
      size: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

