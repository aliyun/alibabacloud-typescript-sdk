// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The parameters of the export task. The parameters are concatenated based on query conditions and formatted in JSON.
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
   * - incident_list: incident list.
   * 
   * @example
   * incident_list
   */
  exportTaskType?: string;
  /**
   * @remarks
   * The language of the response message. Valid values:
   * - **zh** (default): Chinese.
   * - **en**: English.
   * Note: This parameter is required. If it is not provided, the API returns a 400 error with the message "The specified Lang can not be empty.".
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The region of the data management center for Threat Analysis. Select the region of the management center based on the region where your assets are located. Valid values:
   * - cn-hangzhou: The assets are located in the Chinese mainland.
   * - ap-southeast-1: The assets are located outside the Chinese mainland.
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

