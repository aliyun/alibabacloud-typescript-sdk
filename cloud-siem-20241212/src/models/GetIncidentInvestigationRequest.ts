// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIncidentInvestigationRequest extends $dara.Model {
  /**
   * @remarks
   * The display ID of the AI investigation report. You can obtain it from the IncidentInvestigationDisplayId parameter returned by ListIncidentInvestigations. This parameter takes effect only when IncidentInvestigationId is not specified. If neither identifier is specified, the most recent successfully completed investigation result for the specified event is queried.
   * 
   * @example
   * 755616bb5d63046c1e4f62ea872a****
   */
  incidentInvestigationDisplayId?: string;
  /**
   * @remarks
   * The ID of the AI investigation report. You can obtain it from the IncidentInvestigationId parameter returned by ListIncidentInvestigations. If both this parameter and IncidentInvestigationDisplayId are specified, this parameter takes precedence.
   * 
   * @example
   * 951a6a0b-14c7-4332-ace6-bff21c******
   */
  incidentInvestigationId?: string;
  /**
   * @remarks
   * The globally unique identity of the event. If neither the report ID nor the display ID is specified, an event query is performed to retrieve the most recent successfully completed investigation result.
   * 
   * This parameter is required.
   * 
   * @example
   * 85ea4241-798f-4684-a876-65d4f0c3****
   */
  incidentUuid?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region where the data management center of Threat Analysis is located. You must select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: Assets are located in the Chinese mainland.
   * - ap-southeast-1: Assets are located outside the Chinese mainland.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the user whose perspective the administrator switches to.
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

