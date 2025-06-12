// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryInstancePrice4ModifyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 002XWH7MXB8MJRU0
   */
  applicationId?: string;
  configuration?: { [key: string]: any };
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * rm-uf66k9143r2ch*****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationId: 'ApplicationId',
      configuration: 'Configuration',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationId: 'string',
      configuration: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      instanceId: 'string',
    };
  }

  validate() {
    if(this.configuration) {
      $dara.Model.validateMap(this.configuration);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

