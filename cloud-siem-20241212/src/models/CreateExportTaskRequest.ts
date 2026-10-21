// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The export task parameters, which are concatenated based on query conditions in JSON format.
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
   * The export type. Valid values:
   * - incident_list: Event list.
   * 
   * @example
   * incident_list
   */
  exportTaskType?: string;
  /**
   * @remarks
   * The language of the response. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * > Note: This parameter is required. If you do not specify this parameter, the API returns a 400 error: "The specified Lang can not be empty."
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region where the threat analysis data management center resides. Specify the management center region based on the region of your assets. Valid values:
   * - cn-hangzhou: Your assets reside in the Chinese mainland.
   * - ap-southeast-1: Your assets reside outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the member to which the administrator switches the view.
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

