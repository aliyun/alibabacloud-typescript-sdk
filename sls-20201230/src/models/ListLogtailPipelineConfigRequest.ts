// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLogtailPipelineConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the Logtail pipeline configuration.
   * 
   * @example
   * logtail-config-sample
   */
  configName?: string;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * @example
   * test-logstore
   */
  logstoreName?: string;
  /**
   * @remarks
   * The line from which the query starts.
   * 
   * @example
   * 0
   */
  offset?: number;
  /**
   * @remarks
   * The number of Logtail pipeline configurations per page.
   * 
   * @example
   * 20
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

