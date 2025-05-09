// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationRequestAlarmConfig extends $dara.Model {
  /**
   * @remarks
   * The alert contact groups.
   */
  contactGroups?: string[];
  /**
   * @remarks
   * The health check URL of the application.
   * 
   * @example
   * /healthcheck/tcp50122
   */
  healthCheckUrl?: string;
  /**
   * @remarks
   * The alert templates.
   */
  templateIds?: string[];
  static names(): { [key: string]: string } {
    return {
      contactGroups: 'ContactGroups',
      healthCheckUrl: 'HealthCheckUrl',
      templateIds: 'TemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroups: { 'type': 'array', 'itemType': 'string' },
      healthCheckUrl: 'string',
      templateIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.contactGroups)) {
      $dara.Model.validateArray(this.contactGroups);
    }
    if(Array.isArray(this.templateIds)) {
      $dara.Model.validateArray(this.templateIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

