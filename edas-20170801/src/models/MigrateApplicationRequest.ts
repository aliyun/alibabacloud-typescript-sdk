// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateApplicationRequest extends $dara.Model {
  /**
   * @remarks
   * The list of application IDs.
   */
  appIds?: string[];
  /**
   * @remarks
   * The operation command. Valid values:
   * - export: Export.
   * - import: Import.
   * 
   * @example
   * export
   */
  cmd?: string;
  /**
   * @remarks
   * Specifies whether to export the application binary. Default value: false.
   * 
   * @example
   * {withBinary:true}
   */
  config?: string;
  /**
   * @remarks
   * The raw data for the application to be imported, which is sourced from the JSON file of the exported application.
   * 
   * @example
   * {"job_id":"b72c0ed4-a69f-4872-b4c6-def5555bfd3e","app_info":"xxxx"
   */
  rawData?: string;
  /**
   * @remarks
   * regionId
   * 
   * @example
   * cn-shenzhen
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      appIds: 'appIds',
      cmd: 'cmd',
      config: 'config',
      rawData: 'rawData',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appIds: { 'type': 'array', 'itemType': 'string' },
      cmd: 'string',
      config: 'string',
      rawData: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appIds)) {
      $dara.Model.validateArray(this.appIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

