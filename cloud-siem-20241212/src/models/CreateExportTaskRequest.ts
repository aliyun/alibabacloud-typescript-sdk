// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters for the export task. The value is a JSON string that is generated based on the query conditions.
   * 
   * @example
   * {
   *     "IncidentName": "name",
   *     "IncidentStatus": "1",
   *     "ThreatLevel":["1","2"],
   *     "IncidentUuids":"315EE627-39DC-560A-8DFD-CBF66AD9****"
   * }
   */
  exportTaskParameter?: string;
  /**
   * @remarks
   * The type of data to export. Valid values:
   * 
   * - incident_list: event list.
   * 
   * @example
   * incident_list
   */
  exportTaskType?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * - **zh** (default): Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region of the Data Management center. Select a region based on where your assets are located. Valid values:
   * 
   * - cn-hangzhou: The Chinese mainland.
   * 
   * - ap-southeast-1: Regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID of a member. An administrator can use this parameter to switch to the perspective of a member.
   * 
   * @example
   * 113091674488****
   */
  roleFor?: number;
  static names(): { [key: string]: string } {
    return {
      exportTaskParameter: 'ExportTaskParameter',
      exportTaskType: 'ExportTaskType',
      lang: 'Lang',
      regionId: 'RegionId',
      roleFor: 'RoleFor',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportTaskParameter: 'string',
      exportTaskType: 'string',
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

