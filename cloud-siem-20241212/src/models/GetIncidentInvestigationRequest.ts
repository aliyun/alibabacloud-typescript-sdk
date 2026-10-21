// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIncidentInvestigationRequest extends $dara.Model {
  /**
   * @remarks
   * The display ID of the AI investigation report. You can obtain this value from the IncidentInvestigationDisplayId field returned by ListIncidentInvestigations. This parameter takes effect only when IncidentInvestigationId is not specified. If neither identifier is specified, the most recent successfully completed investigation result for the specified incident is returned.
   * 
   * @example
   * 755616bb5d63046c1e4f62ea872a****
   */
  incidentInvestigationDisplayId?: string;
  /**
   * @remarks
   * The AI investigation report ID. You can obtain this value from the IncidentInvestigationId field returned by ListIncidentInvestigations. If both this parameter and IncidentInvestigationDisplayId are specified, this parameter takes precedence.
   * 
   * @example
   * 951a6a0b-14c7-4332-ace6-bff21c******
   */
  incidentInvestigationId?: string;
  /**
   * @remarks
   * The globally unique identity of the event. If neither the report ID nor the display ID is specified, the most recent successfully completed investigation result for this event is returned via event query.
   * 
   * This parameter is required.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region where the threat analysis data management center resides. Specify the management center based on the region of your assets. Valid values:
   * - cn-hangzhou: Chinese mainland.
   * - ap-southeast-1: Outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID that the administrator uses to switch to the view of another member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      incidentInvestigationDisplayId: 'IncidentInvestigationDisplayId',
      incidentInvestigationId: 'IncidentInvestigationId',
      incidentUuid: 'IncidentUuid',
      lang: 'Lang',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      incidentInvestigationDisplayId: 'string',
      incidentInvestigationId: 'string',
      incidentUuid: 'string',
      lang: 'string',
      regionId: 'string',
      roleFor: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

