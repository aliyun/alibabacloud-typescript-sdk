// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMonitoringTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  alertTemplatesJson?: string;
  description?: string;
  hostAvailabilityTemplate?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  id?: number;
  name?: string;
  processMonitorTemplates?: string;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  restVersion?: number;
  systemEventTemplates?: string;
  static names(): { [key: string]: string } {
    return {
      alertTemplatesJson: 'AlertTemplatesJson',
      description: 'Description',
      hostAvailabilityTemplate: 'HostAvailabilityTemplate',
      id: 'Id',
      name: 'Name',
      processMonitorTemplates: 'ProcessMonitorTemplates',
      regionId: 'RegionId',
      restVersion: 'RestVersion',
      systemEventTemplates: 'SystemEventTemplates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTemplatesJson: 'string',
      description: 'string',
      hostAvailabilityTemplate: 'string',
      id: 'number',
      name: 'string',
      processMonitorTemplates: 'string',
      regionId: 'string',
      restVersion: 'number',
      systemEventTemplates: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

