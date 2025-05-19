// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMonitoringTemplateResponseBodyResource extends $dara.Model {
  alertTemplatesJson?: string;
  description?: string;
  hostAvailabilityTemplate?: string;
  id?: string;
  name?: string;
  namespace?: string;
  processMonitorTemplates?: string;
  restVersion?: string;
  systemEventTemplates?: string;
  static names(): { [key: string]: string } {
    return {
      alertTemplatesJson: 'AlertTemplatesJson',
      description: 'Description',
      hostAvailabilityTemplate: 'HostAvailabilityTemplate',
      id: 'Id',
      name: 'Name',
      namespace: 'Namespace',
      processMonitorTemplates: 'ProcessMonitorTemplates',
      restVersion: 'RestVersion',
      systemEventTemplates: 'SystemEventTemplates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertTemplatesJson: 'string',
      description: 'string',
      hostAvailabilityTemplate: 'string',
      id: 'string',
      name: 'string',
      namespace: 'string',
      processMonitorTemplates: 'string',
      restVersion: 'string',
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

