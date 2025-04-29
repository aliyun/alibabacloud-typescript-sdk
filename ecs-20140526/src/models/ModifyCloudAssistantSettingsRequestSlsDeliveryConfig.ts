// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCloudAssistantSettingsRequestSlsDeliveryConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to deliver records to Simple Log Service. Default value: false.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The name of the Logstore.
   * 
   * @example
   * example-logstore
   */
  logstoreName?: string;
  /**
   * @remarks
   * The name of the Simple Log Service project.
   * 
   * @example
   * example-project
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      logstoreName: 'LogstoreName',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      logstoreName: 'string',
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

