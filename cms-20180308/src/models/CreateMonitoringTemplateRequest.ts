// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMonitoringTemplateRequest extends $dara.Model {
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
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  namespace?: string;
  processMonitorTemplates?: string;
  regionId?: string;
  systemEventTemplates?: string;
  static names(): { [key: string]: string } {
    return {
      alertTemplatesJson: 'AlertTemplatesJson',
      description: 'Description',
      hostAvailabilityTemplate: 'HostAvailabilityTemplate',
      name: 'Name',
      namespace: 'Namespace',
      processMonitorTemplates: 'ProcessMonitorTemplates',
      regionId: 'RegionId',
      systemEventTemplates: 'SystemEventTemplates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTemplatesJson: 'string',
      description: 'string',
      hostAvailabilityTemplate: 'string',
      name: 'string',
      namespace: 'string',
      processMonitorTemplates: 'string',
      regionId: 'string',
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

