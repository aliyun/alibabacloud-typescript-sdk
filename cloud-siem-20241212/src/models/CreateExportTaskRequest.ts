// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateExportTaskRequest extends $dara.Model {
  /**
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
   * @example
   * incident_list
   */
  exportTaskType?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
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

